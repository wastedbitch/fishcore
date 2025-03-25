import SpotifyWebApi from 'spotify-web-api-node';
import { NextResponse } from 'next/server';
require('dotenv').config();

export async function GET() {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  });

  try {
    const data = await spotifyApi.clientCredentialsGrant();
    return NextResponse.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to authenticate with Spotify' },
      { status: 500 }
    );
  }
}