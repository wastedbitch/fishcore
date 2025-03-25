import SpotifyWebApi from 'spotify-web-api-node';
import { NextResponse } from 'next/server';
require('dotenv').config();

export async function GET(request, { params }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  });

  try {
    // First get an access token
    const authData = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(authData.body.access_token);

    // Then get the track data
    const { body: track } = await spotifyApi.getTrack(params.id);
    
    return NextResponse.json({
      id: track.id,
      name: track.name,
      artists: track.artists,
      previewUrl: track.preview_url,
      durationMs: track.duration_ms,
      album: {
        images: track.album.images
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch track data' },
      { status: 500 }
    );
  }
}