import type { Work } from "../types/Work"

const works: { [key: string]: Work } = {
  "tactica": {
    "title": "Tactica",
    "text": "Mobile turn-based strategy game with procedurally generated maps, 3D models and challenging AI. Custom 3D model pipeline from Blender to OpenGL ES as game was released before any mobile 3D engines became available. Multiplayer-Server built in python.",
    "techs": ["UIKit", "OpenGL", "Blender"],
    "role": "developer, designer, idea",
    "release": "2009",
    "url": "https://www.youtube.com/watch?v=MAYVPjAc_9s",
    "thumbnail": "logo.png",
    "langs": ["ObjC", "C", "C++"],
    "imgs": ["tactica.png", "flyerfront.jpg", "flyerback.jpg"]
  },
  "ibeat": {
    "title": "iBeat the Metronome",
    "text": "Metronome app with variable sounds and metres. 900'000 downloads total.",
    "techs": ["UIKit", "Audacity"],
    "role": "developer, designer, idea",
    "release": "2010",
    "url": "https://apptopia.com/ios/app/398984403/about",
    "thumbnail": "logo.png",
    "langs": ["ObjC"],
    "imgs": ["ibeat"]
  },
  "isogon": {
    "title": "ISOGON Fenster Konfigurator",
    "text": "AR app before AR became a thing. ISOGON is a Berlin based window-glass manufacturer, the app allows previewing of structured glasses in 3D.",
    "techs": ["OpenGL ES", "UIKit", "a lot of custom C++ code utilizing PVRTools by Imagination Technologies"],
    "role": "sole developer",
    "release": "2011",
    "url": "https://apps.apple.com/de/app/fenster/id455902895?l=en",
    "thumbnail": "logo.png",
    "langs": ["ObjC", "C++"],
    "imgs": ["isogon", "isogon2"]
  },
  "iceyetest": {
    "title": "IC the Eyetest",
    "text": "Collaboration with a Berlin-based ophthalmologist, Mobile eye test for iPhone&iPad. Several weeks in the #10 best-selling medical apps after release. Featured on TV.",
    "techs": ["UIKit", "CoreGraphics", "Bonjour"],
    "role": "developer, designer",
    "release": "2011",
    "url": "https://www.ipad-tipps.de/ipad-apps-oculus-testen-sie-ihre-sehscharfe-direkt-uber-das-ipad/",
    "thumbnail": "logo.png",
    "langs": ["ObjC"],
    "imgs": ["ic"]
  },
  "nickjr": {
    "title": "Nick Jr. Watch & Learn",
    "text": "iPhone & iPad App for VIMN Germany, won a Bronze Lovie Award 2014 - Mobile Handheld: Education & Reference",
    "techs": ["UIKit", "AVFoundation"],
    "role": "sole developer",
    "release": "2012",
    "url": "https://winners.lovieawards.com/#!y=2014&m=309",
    "thumbnail": "logo.png",
    "langs": ["ObjC"],
    "imgs": ["dora", "download.jpeg", "nickjr-1.PNG"]
  },
  "mtvutt": {
    "title": "MTV Under The Thumb",
    "text": "iPhone & iPad App for VIMN Germany, maintenance of the iOS client after original team was aquired by third party.",
    "techs": ["UIKit", "AVFoundation"],
    "role": "developer",
    "release": "2013",
    "url": "https://news.cision.com/de/viacomcbs-networks-gsa/r/mtv-baut-mobiles-tv-erlebnis-aus--lineare-premium-tv-kanale-erweitern-mtv-under-the-thumb-app,c9413537",
    "thumbnail": "logo.png",
    "langs": ["ObjC"],
    "imgs": ["utt.jpeg", "thumb.jpg"]
  },
  "formicarium": {
    "title": "Formicarium",
    "text": "Ecosystem simulation and ants strategy game inspired by Dwarf Fortress. Core ecosystem simulation running in C++ with a decoupled UI using SpriteKit",
    "techs": ["Boost", "C++ std", "SpriteKit"],
    "role": "developer, idea",
    "release": "2014",
    "url": "https://www.kickstarter.com/projects/1732304023/formicarium-a-strategy-simulation-sandbox-game/?ref=kicktraq",
    "thumbnail": "logo.png",
    "langs": ["ObjC", "C++"],
    "imgs": ["underground management_small", "fighting beetle", "screenshot_iniPad.jpg"]
  },
  "playplex": {
    "title": "Viacom Play Plex",
    "text": "White-Label media streaming for MTV, TVLand, BET and Comedy Central outside of the US.",
    "techs": ["UIKit", "AVFoundation"],
    "role": "developer, architect",
    "release": "2015",
    "url": "https://www.mediaweek.com.au/viacom-launches-viacom-play-plex-suite-of-mobile-tv-apps/",
    "thumbnail": "logo.jpg",
    "langs": ["Swift"],
    "imgs": ["320x480bb.jpg", "iPhone2.jpg", "playplex.jpg"]
  },
  "nickelodeon": {
    "title": "Nickelodeon International App",
    "text": "International version of the iOS Nickelodeon App.",
    "techs": ["UIKit", "AVFoundation"],
    "role": "lead developer",
    "release": "2016",
    "url": "https://www.nickalive.net/2020/12/nickelodeon-benelux-to-discontinue.html?m=0",
    "thumbnail": "logo.png",
    "langs": ["ObjC", "Swift"],
    "imgs": ["nickelodeon.jpg", "intl.jpg"]
  },
  "looceyetest": {
    "title": "LooC Mobile Eye Test",
    "text": "Complete rewrite of the eyetest app in Swift. New Color Vision Test added.",
    "techs": ["UIKit", "Swift", "lot's of CoreGraphics and a Swift implementation of KDTree's for the color vision test"],
    "role": "CTO",
    "release": "2017",
    "url": "https://apps.apple.com/us/app/looc-mobile-eye-test/id405950873",
    "thumbnail": "logo.png",
    "langs": ["Swift", "GLSL"],
    "imgs": ["test1", "test2"]
  },
  "universeAR": {
    "title": "Universe AR",
    "text": "AR visualization of the Solar system and star constellations. Holiday project that ended up becoming the LooC AR Try-On app",
    "techs": ["SceneKit", "ARKit", "Swift"],
    "role": "developer, designer, idea",
    "release": "2017",
    "url": "https://www.youtube.com/shorts/y8YNZEFhtME",
    "thumbnail": "logo.png",
    "langs": ["Swift"],
    "imgs": ["screenshot"]
  },
  "loocar": {
    "title": "LooC AR Try-On",
    "text": "Virtual Try-On of glasses in AR.",
    "techs": ["UIKit", "SceneKit", "ARKit", "Swift"],
    "role": "CTO",
    "release": "2019",
    "url": "https://apps.apple.com/us/app/my-looc-virtual-try-on/id1463380262",
    "thumbnail": "logo.png",
    "langs": ["Swift"],
    "imgs": ["looc ar app"]
  },
  "looccms": {
    "title": "LooC Content Management System",
    "text": "Cloud-based management of the 3D models for LooC. Frontend management site for opticians and managers with a serverless backend based on AWS.",
    "techs": ["React.js", "Node.js", "AWS Lambda Dynamodb Cloudfront", "Blender"],
    "role": "CTO",
    "url": "https://cms.looc.io",
    "release": "2020",
    "thumbnail": "CMS_Logo_icon.svg",
    "langs": ["TS", "JS", "Python"],
    "imgs": ["looccms2", "looccms", "looccms3"]
  },
  "grafixandroid": {
    "title": "Grafix 4.0 Android",
    "text": "Virtual Try-On of glasses in AR on Android.",
    "techs": ["Unity", "Android", "ARCore"],
    "role": "Client of LooC GmbH",
    "url": "https://play.google.com/store/apps/details?id=de.mom.grafix",
    "release": "2021",
    "thumbnail": "logo.png",
    "langs": ["C#"],
    "imgs": ["unnamed.jpg", "unnamed-2.jpg"]
  },
  "loocwebgl": {
    "title": "LooC WebGL Try-On",
    "text": "Virtual Try-On of glasses in the browser.",
    "techs": ["Unity", "WebGL", "OpenCV"],
    "role": "CTO",
    "url": "https://test.looc.io/tryon/index.html",
    "release": "2021",
    "thumbnail": "logo.png",
    "langs": ["C#"],
    "imgs": ["screenshot.jpg"]
  },
  "reframd": {
    "title": "Reframd iOS App",
    "text": "Virtual Try-On of glasses in AR. Measuring of faces allowing Reframd to create customized frames.",
    "techs": ["UIKit", "SceneKit", "ARKit", "Swift"],
    "role": "Client-project of LooC GmbH",
    "url": "https://www.reframd.com",
    "release": "2021",
    "thumbnail": "Icon.jpg",
    "langs": ["Swift"],
    "imgs": ["1242x2688bb.png"]
  },
  "eo": {
    "title": "Edel-Optics iOS App",
    "text": "Measuring of faces and centration of lenses. Allowing Edel-Optics GmbH to customize orders on their web shop.",
    "techs": ["UIKit", "SceneKit", "ARKit", "Swift"],
    "role": "Client-project of LooC GmbH",
    "url": "https://apps.apple.com/app/edel-optics/id1594244005",
    "release": "2022",
    "thumbnail": "logo.png",
    "langs": ["Swift"],
    "imgs": ["edel-optics-measure.png"]
  },
  "riddler": {
    "title": "The Riddler",
    "text": "Interactive Multi-Media AR-Installation for CSAIL MIT. Permanent digital world running on a wall installation, users can interact using their phones in AR.",
    "techs": ["Unity", "Photon", "ARKit", "ARFoundation"],
    "role": "sole developer",
    "url": "https://www.csail.mit.edu/news/magical-garden-gates-tower",
    "release": "2022",
    "thumbnail": "logo.png",
    "langs": ["C#", "GLSL"],
    "imgs": ["largepic.jpg", "ar.jpg", "riddler.jpg"]
  },
  "recast": {
    "title": "Recast Chrome Extension & Player SSR page",
    "text": "Helping my friends of letsrecast.ai with a chrome extension frontend in Solid.js as well as a server-side rendered Solid.js dynamic page for individual recasts.",
    "techs": ["Solid.js", "React.js", "AWS Lambda, CF, S3, DynamoDB"],
    "role": "developer",
    "url": "https://www.letsrecast.ai",
    "release": "2023",
    "thumbnail": "logo.png",
    "langs": ["TS", "JS"],
    "imgs": ["recast chrome extension.png", "recast SSR"]
  },
  "urhere": {
    "title": "URHERE Art Performance Streaming Site",
    "text": "Media streaming website for art performances and audio walks in New York. With user management, stripe integration for payment and dynamic content loading",
    "techs": ["Solid.js frontend", "AWS Lambda", "CF", "S3", "DynamoDB", "Stripe payment integration"],
    "role": "architect, lead backend, lead frontend",
    "url": "https://urhere.art/",
    "release": "2023",
    "thumbnail": "logo.png",
    "langs": ["TS", "JS"],
    "imgs": ["urhere big", "urhere small"]
  }
}

export default works;