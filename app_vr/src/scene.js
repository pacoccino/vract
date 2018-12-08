export default class Scene {

  constructor(reactInstance) {
    this.reactInstance = reactInstance;
  }

  getVideoUrl() {

    //const assetURL = this.reactInstance.getAssetURL('vid.mp4');
    const clvideo = 'https://res.cloudinary.com/drvx4hgdz/video/upload/v1544297604/vract/fract_0_video.mp4';

    return clvideo;
  }

  init() {

    const assetURL = this.getVideoUrl();

    const player = this.reactInstance.compositor.createVideoPlayer('myplayer');
    // Set the video to be played, and its format
    player.setSource(assetURL, '2D');
    player.setLoop(true);

    this.reactInstance.compositor.setBackgroundVideo('myplayer');
    player.play();

  }

}
