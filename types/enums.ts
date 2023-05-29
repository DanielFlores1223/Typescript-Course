(() => {
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }


    let currentAuido: AudioLevel = AudioLevel.medium;
    console.log(currentAuido); // 1

})();