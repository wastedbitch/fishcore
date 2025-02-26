<template>
    <div class="flex flex-col gap-12 justify-center items-center h-full">
        <audio src="music.mp3" id="fishcore"></audio>
        <img src="/fish.gif" alt="" class="h-[6rem]" if="fish">
        <p class="text-white font-mono">all cods are bastards</p>
    </div>
    <btn class=" absolute w-[100vw] h-[100vh] top-0 left-0" @click="playAudio()" loop></btn>
    <a href="https://open.spotify.com/playlist/4XdhYCxazXCEhvxcJRfUYa?si=CDOnpMRNRrqAgLr-loUQ4Q" target="_blank" rel="noopener noreferrer" class="text-fuchsia-900 font-mono">&lt;:3&gt;&lt;.wav</a>
</template>

<script>
export default {
  methods: {
    playAudio() {

        var audio = document.getElementById("fishcore");
        if (audio.paused) {
            audio.play();
        } else {
            none
        }
    }
  },
}
</script>
