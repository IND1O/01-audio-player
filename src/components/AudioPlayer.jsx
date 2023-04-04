import Player from "@madzadev/audio-player";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const colors = `html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #9440f3; 
          --timeColor: #9440f3;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`;

export const AudioPlayer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="col">
            <Player
              trackList={tracks}
              includeTags={true}
              includeSearch={true}
              showPlaylist={true}
              autoPlayNextTrack={true}
              customColorScheme={colors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
