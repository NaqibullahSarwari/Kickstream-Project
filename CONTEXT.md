I need to build a complete live streaming system with RTMP key generation using LiveKit, MongoDB, Express.js, and Next.js (JavaScript).

## My LiveKit Setup:
- Project name: Kickstream
- API Key visible in dashboard: AH6Lokb7yc4f8f6
- I need to retrieve the API Secret by clicking on the key
- WebSocket URL will be from my project dashboard

## Project Requirements:

### PART 1: BACKEND SETUP (Node.js + Express in /server folder)

#### 1. Install Dependencies
```bash
cd server
npm install livekit-server-sdk (Already Installed)
```

#### 2. Environment Variables (server/.env)
Add these LiveKit credentials (I'll fill in from my dashboard):
LiveKit Configuration
LIVEKIT_API_KEY=AH6Lokb7yc4f8f6
LIVEKIT_API_SECRET=[I need to get this from LiveKit dashboard by clicking on the key]
LIVEKIT_API_URL=https://[my-project-name].livekit.cloud
LIVEKIT_WS_URL=wss://[my-project-name].livekit.cloud
MongoDB
MONGODB_URI=mongodb://localhost:27017/kickstream

I have added these livekit credentials


### PART 2: FRONTEND SETUP (Next.js in /client folder)

#### 1. Install Dependencies
```bash
cd client
npm install livekit-client @livekit/components-react (Already Installed)

### PART 2: LIVEKIT CONFIGURATION

#### Step 1: Get API Credentials
1. Go to your LiveKit dashboard (already open in screenshot)
2. Click on Settings → API keys
3. Click on your key `AH6Lokb7yc4f8f6`
4. Click "Reveal secret" to see the API secret
5. Copy both API key and secret to `.env`

#### Step 2: Get WebSocket URL
1. In LiveKit dashboard, go to Overview
2. Copy the WebSocket URL (usually `wss://your-project.livekit.cloud`)
3. Add to `.env` as `LIVEKIT_WS_URL`

#### Step 3: Configure Webhook
1. In LiveKit, go to Settings → Webhooks
2. Click "Add endpoint"
3. Enter URL: `https://your-ngrok-url.ngrok.io/api/webhooks/livekit`
4. Select signing key: AH6Lokb7yc4f8f6 (your API key)
5. Click Create

---

### PART 4: TESTING WITH NGROK
```bash
# Terminal 1: Start backend
cd server
npm run dev

# Terminal 2: Start frontend  
cd client
npm run dev

# Terminal 3: Start ngrok
ngrok http 5000
```

Then update LiveKit webhook URL with your ngrok URL.

---

### PART 5: OBS STUDIO SETUP

1. **Download OBS**: https://obsproject.com/
2. **Open OBS** and create a new scene
3. **Add source**: Click + → Screen Capture (or any source)
4. **Configure streaming**:
   - Settings → Stream
   - Service: Custom
   - Server: Paste from your app's Keys page
   - Stream Key: Paste from your app's Keys page
5. **Click "Start Streaming"**

The `isLive` status will automatically update via webhook!

---

## Key Files to Create:
- `server/model/Stream.js` - Mongoose schema
- `server/Controller/streamController.js` - LiveKit integration
- `server/Routes/streamRoutes.js` - API routes
- `server/Routes/webhookRoutes.js` - Webhook handler
- `client/app/services/streamApi.js` - Frontend API calls
- `client/app/dashboard/keys/page.js` - Keys management UI

Please implement this complete system with proper error handling, loading states, and user feedback. Make sure the webhook route comes before body parsing middleware in Express to properly receive the raw text payload from LiveKit.
