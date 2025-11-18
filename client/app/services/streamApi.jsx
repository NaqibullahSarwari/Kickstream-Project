const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create or get RTMP ingress
export const createIngress = async (userId, userName, metadata = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ingress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, userName, ...metadata }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Failed to create ingress" }));
      throw new Error(errorData.error || errorData.details || "Failed to create ingress");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating ingress:", error);
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "Cannot connect to backend server. Make sure the server is running on port 5000."
      );
    }
    throw error;
  }
};

// Reset ingress (delete and create new)
export const resetIngress = async (userId, metadata = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ingress/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, ...metadata }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to reset ingress");
    }

    return await response.json();
  } catch (error) {
    console.error("Error resetting ingress:", error);
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "Cannot connect to backend server. Make sure the server is running on port 5000."
      );
    }
    throw error;
  }
};

// Get stream by userId
export const getStreamByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stream/${userId}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null; // Stream not found
      }
      const error = await response.json();
      throw new Error(error.error || "Failed to get stream");
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting stream:", error);
    // Provide more helpful error messages
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "Cannot connect to backend server. Make sure the server is running on port 5000. " +
        "Run 'npm run dev' in the server folder."
      );
    }
    throw error;
  }
};

export const getStreams = async (status) => {
  try {
    const url = new URL(`${API_BASE_URL}/streams`);
    if (status) {
      url.searchParams.append("status", status);
    }

    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch streams");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching streams:", error);
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "Cannot connect to backend server. Make sure the server is running on port 5000."
      );
    }
    throw error;
  }
};

export const getStreamById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stream/id/${id}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch stream");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching stream:", error);
    if (error.message === "Failed to fetch" || error.name === "TypeError") {
      throw new Error(
        "Cannot connect to backend server. Make sure the server is running on port 5000."
      );
    }
    throw error;
  }
};

