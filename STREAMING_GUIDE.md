# 🎥 How to Start Streaming - Complete Guide

## Prerequisites

1. **MongoDB** must be running on your system
2. **LiveKit credentials** configured in `server/.env`
3. **Node.js** installed

---

## Step 1: Start the Backend Server

Open a terminal and run:

```bash
cd server
npm run dev
```

You should see:
```
MongoDB connected successfully
Server is running on PORT 5000
```

**If you see errors:**
- Make sure MongoDB is running: `mongod` or start MongoDB service
- Check your `server/.env` file has all required variables
- Verify LiveKit credentials are correct

---

## Step 2: Start the Frontend (Next.js)

Open a **new terminal** and run:

```bash
cd client
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000
```

---

## Step 3: Access the Keys Page

1. Open your browser and go to: `http://localhost:3000/dashboard/keys`
2. The page will automatically:
   - Connect to the backend
   - Create or retrieve your RTMP ingress
   - Display your Server URL and Stream Key

**If you see "Failed to fetch" error:**
- Make sure the backend server is running (Step 1)
- Check that both servers are running in separate terminals
- Verify the backend is on port 5000

---

## Step 4: Set Up OBS Studio

### 4.1 Download OBS Studio
- Download from: https://obsproject.com/
- Install and open OBS Studio

### 4.2 Configure Stream Settings

1. In OBS Studio, go to **Settings** → **Stream**
2. Set the following:
   - **Service**: `Custom`
   - **Server**: Copy the **Server URL** from your Keys page
   - **Stream Key**: Copy the **Stream Key** from your Keys page
3. Click **OK**

### 4.3 Add Sources

1. In OBS, click the **+** button in the Sources section
2. Add sources like:
   - **Display Capture** (to capture your screen)
   - **Window Capture** (to capture a specific window)
   - **Video Capture Device** (for webcam)
   - **Audio Input Capture** (for microphone)

### 4.4 Start Streaming

1. Click **Start Streaming** in OBS Studio
2. Your stream status on the Keys page will automatically update to **"Live"** 🟢
3. The webhook will notify your backend when you start/stop streaming

---

## Step 5: View Your Stream

Your stream will be available at the **Stream URL** shown on your Keys page.

---

## Troubleshooting

### Backend won't start
- Check MongoDB is running: `mongod` or start MongoDB service
- Verify `.env` file exists in `server/` folder with all required variables
- Check port 5000 is not already in use

### "Failed to fetch" error
- Ensure backend server is running (`npm run dev` in server folder)
- Check backend is on port 5000
- Verify CORS is enabled (it should be by default)

### Stream key not generating
- Check LiveKit credentials in `server/.env`
- Verify `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, and `LIVEKIT_API_URL` are correct
- Check backend console for error messages

### OBS can't connect
- Verify Server URL and Stream Key are copied correctly
- Make sure there are no extra spaces when pasting
- Check your internet connection
- Verify LiveKit service is accessible

### Stream status not updating
- Make sure webhook is configured in LiveKit dashboard
- Check webhook URL is correct: `https://your-ngrok-url.ngrok.io/api/webhooks/livekit`
- For local testing, use ngrok to expose your backend

---

## Quick Start Checklist

- [ ] MongoDB is running
- [ ] Backend server is running (`cd server && npm run dev`)
- [ ] Frontend is running (`cd client && npm run dev`)
- [ ] Can access `http://localhost:3000/dashboard/keys`
- [ ] Server URL and Stream Key are displayed
- [ ] OBS Studio is installed
- [ ] OBS is configured with Server URL and Stream Key
- [ ] Clicked "Start Streaming" in OBS
- [ ] Stream status shows "Live" on Keys page

---

## Environment Variables Required

### `server/.env`
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kickstream
LIVEKIT_API_KEY=AH6Lokb7yc4f8f6
LIVEKIT_API_SECRET=your_api_secret_here
LIVEKIT_API_URL=https://your-project.livekit.cloud
LIVEKIT_WS_URL=wss://your-project.livekit.cloud
```

### `client/.env.local` (optional)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## Need Help?

1. Check the browser console for errors (F12)
2. Check the backend terminal for error messages
3. Verify all environment variables are set correctly
4. Make sure MongoDB is running and accessible

