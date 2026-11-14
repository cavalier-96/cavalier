// 홈페이지 설정 (여기만 고치면 돼요)
// DOWNLOAD_URL: GitHub Releases 의 zip 주소. 비어 있으면 버튼이 '곧 공개돼요'로 보여요.
//   예) "https://github.com/cavalier-96/cavalier/releases/download/clean-v1.0.0-beta/CavalierClean-1.0.0-beta.zip"
window.CAV_SITE = {
  EMAIL: "cavalier_-@naver.com",
  SELLER: "cavalier",
  PRODUCTS: {
    clean:  { NAME: "Cavalier Clean",  DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/clean-v1.0.0-beta/CavalierClean-1.0.0-beta.zip", VERSION: "1.0.0 베타", SIZE: "약 50MB" },
    hotkey: { NAME: "Cavalier Hotkey", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/hotkey-v3.7.0/CavalierHotkey-v3.7.0.zip", VERSION: "3.7.0",      SIZE: "약 24MB" },
    // Cavalier 유틸 (같은 릴리스 utils-v0.1.0 에 10개 파일)
    suite:   { NAME: "Cavalier 유틸 올인원", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/utils-v0.1.2/CavalierUtils-AllInOne-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 700MB" },
    view:    { NAME: "Cavalier View",    DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/view-v0.1.2/CavalierView-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 92MB" },
    capture: { NAME: "Cavalier Capture", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/capture-v0.1.2/CavalierCapture-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 116MB" },
    zip:     { NAME: "Cavalier Zip",     DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/zip-v0.1.2/CavalierZip-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 37MB" },
    clip:    { NAME: "Cavalier Clip",    DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/clip-v0.1.2/CavalierClip-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 33MB" },
    convert: { NAME: "Cavalier Convert", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/convert-v0.1.2/CavalierConvert-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 146MB" },
    rename:  { NAME: "Cavalier Rename",  DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/rename-v0.1.2/CavalierRename-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 34MB" },
    tools:   { NAME: "Cavalier Tools",   DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/tools-v0.1.2/CavalierTools-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 31MB" },
    player:  { NAME: "Cavalier Player",  DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/player-v0.1.2/CavalierPlayer-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 150MB" },
    find:    { NAME: "Cavalier Find",    DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/find-v0.1.2/CavalierFind-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 58MB" },
// 2차 · 3차 (제품마다 릴리스 태그 <코드>-v0.1.0)
    hub:     { NAME: "Cavalier 설치 도우미", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/hub-v0.1.2/CavalierHub-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 29MB" },
    pdf:     { NAME: "Cavalier PDF",     DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/pdf-v0.1.2/CavalierPDF-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 66MB" },
    backup:  { NAME: "Cavalier Backup",  DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/backup-v0.1.2/CavalierBackup-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 34MB" },
    font:    { NAME: "Cavalier Font", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/font-v0.1.2/CavalierFont-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 33MB" },
    audio:   { NAME: "Cavalier Audio", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/audio-v0.1.2/CavalierAudio-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 131MB" },
    pix:     { NAME: "Cavalier Pix", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/pix-v0.1.2/CavalierPix-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 116MB" },
    cut:     { NAME: "Cavalier Cut", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/cut-v0.1.2/CavalierCut-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 127MB" },
    hwp:     { NAME: "Cavalier HWP", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/hwp-v0.1.2/CavalierHWP-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 36MB" },
    send:    { NAME: "Cavalier Send", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/send-v0.1.2/CavalierSend-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 35MB" },
    recover: { NAME: "Cavalier Recover", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/recover-v0.1.2/CavalierRecover-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 52MB" },
    studio:  { NAME: "Cavalier Studio", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/studio-v0.1.2/CavalierStudio-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 199MB" },
    photo:   { NAME: "Cavalier Photo", DOWNLOAD_URL: "https://github.com/cavalier-96/cavalier/releases/download/photo-v0.1.2/CavalierPhoto-0.1.2.zip", VERSION: "0.1.2", SIZE: "약 54MB" },
  },
};
