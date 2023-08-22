import type { Work } from "../types/Work";

const works: { [key: string]: Work } = {
  "tactica": {
    "title": "Tactica",
    "text": {
      "en": "Mobile turn-based strategy game with procedurally generated maps, 3D models and challenging AI. Custom 3D model pipeline from Blender to OpenGL ES as game was released before any mobile 3D engines became available. Multiplayer-Server built in python. Featured on the App Store.",
      "de": "Rundenbasiertes Strategiespiel mit prozedural generierten Karten, 3D Modellen und herausfordernder KI. Eigene 3D Modell Pipeline von Blender nach OpenGL ES, da zum Release des Spiels noch keine 3D Engines für mobile Geräte verfügbar waren. Multiplayer-Server in Python."
    },
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
    "text": {
      "en": "Metronome app with variable sounds and metres. 900'000 downloads total. Featured on the App Store.",
      "de": "Metronom App mit variablen Sounds und Metren. 900'000 Downloads insgesamt. Im App Store gefeatured.",
      "el": "Εφαρμογή μετρονόμου με μεταβλητούς ήχους και μέτρα. 900.000 συνολικά λήψεις. Προβάλλεται στο App Store."
    },
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
    "text": {
      "en": "AR app before AR became a thing. ISOGON is a Berlin based window-glass manufacturer, the app allows previewing of structured glasses in 3D.",
      "de": "AR App bevor AR zum Hype wurde. ISOGON ist ein Berliner Fensterglas Hersteller, die App erlaubt die Vorschau von strukturierten Gläsern in 3D."
    },
    "techs": ["OpenGL ES", "UIKit", "PVRTools"],
    "role": "developer",
    "release": "2011",
    "url": "https://apps.apple.com/de/app/fenster/id455902895?l=en",
    "thumbnail": "logo.png",
    "langs": ["ObjC", "C++"],
    "imgs": ["isogon", "isogon2"]
  },
  "iceyetest": {
    "title": "IC the Eyetest",
    "text": {
      "en": "Collaboration with a Berlin-based ophthalmologist, Mobile eye test for iPhone&iPad. Several weeks in the #10 best-selling medical apps after release. Featured on TV.",
      "de": "Zusammenarbeit mit einem Berliner Augenarzt, mobiler Sehtest für iPhone&iPad. Mehrere Wochen in den Top 10 der meistverkauften medizinischen Apps nach Release. TV Berichte und im AppStore gefeatured."
    },
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
    "text": {
      "en": "iPhone & iPad App for VIMN Germany, won a Bronze Lovie Award 2014 - Mobile Handheld: Education & Reference",
      "de": "iPhone & iPad App für VIMN Germany, gewann einen Bronze Lovie Award 2014 - Mobile Handheld: Education & Reference"
    },
    "techs": ["UIKit", "AVFoundation"],
    "role": "developer",
    "release": "2012",
    "url": "https://winners.lovieawards.com/#!y=2014&m=309",
    "thumbnail": "logo.png",
    "langs": ["ObjC"],
    "imgs": ["dora", "download.jpeg", "nickjr-1.PNG"]
  },
  "mtvutt": {
    "title": "MTV Under The Thumb",
    "text": {
      "en": "iPhone & iPad App for VIMN Germany, maintenance of the iOS client after original team was aquired by third party.",
      "de": "iPhone & iPad App für VIMN Germany, Wartung des iOS Clients nachdem das ursprüngliche externe Team aufgekauft wurde."
    },
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
    "text": {
      "en": "Ecosystem simulation and ants strategy game inspired by Dwarf Fortress. Core ecosystem simulation running in C++ with a decoupled UI using SpriteKit",
      "de": "Ökosystem Simulation und Ameisen Strategie Spiel inspiriert von Dwarf Fortress. Ökosystem-Simulation läuft in C++ mit einer entkoppelten UI mit SpriteKit"
    },
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
    "text": {
      "en": "White-Label media streaming for MTV, TVLand, BET and Comedy Central outside of the US.",
      "de": "White-Label Medien Streaming für MTV, TVLand, BET und Comedy Central außerhalb der USA."
    },
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
    "text": {
      "en": "International version of the iOS Nickelodeon App.",
      "de": "Internationale Version der iOS Nickelodeon App."
    },
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
    "text": {
      "en": "Complete rewrite of the eyetest app in Swift. New Color Vision Test added.",
      "de": "Komplette Neuschreibung der Sehtest App in Swift. Neuer Farbsehtest hinzugefügt."
    },
    "techs": ["UIKit", "Swift", "CoreGraphic", "Swift implementation of a KDTree"],
    "role": "CTO",
    "release": "2017",
    "url": "https://apps.apple.com/us/app/looc-mobile-eye-test/id405950873",
    "thumbnail": "logo.png",
    "langs": ["Swift", "GLSL"],
    "imgs": ["test1", "test2"]
  },
  "universeAR": {
    "title": "Universe AR",
    "text": {
      "en": "AR visualization of the Solar system and star constellations. Holiday project that ended up becoming the LooC AR Try-On app.",
      "de": "AR Visualisierung des Sonnensystems und Sternkonstellationen. Urlaubsprojekt, das schließlich zur LooC AR Try-On App wurde."
    },
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
    "text": {
      "en": "Virtual Try-On of glasses in AR.",
      "de": "Virtuelles Anprobieren von Brillen in AR."
    },
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
    "text": {
      "en": "Cloud-based management of the 3D models for LooC. Frontend management site for opticians and managers with a serverless backend based on AWS.",
      "de": "Cloud-basiertes Management der 3D-Modelle für LooC. Frontend-Management-Site für Optiker und Manager mit einem serverlosen Backend auf Basis von AWS."
    },
    "techs": ["React.js", "Node.js", "AWS Lambda, Dynamodb, CF", "Blender"],
    "role": "CTO",
    "url": "https://cms.looc.io",
    "release": "2020",
    "thumbnail": "CMS_Logo_icon.svg",
    "langs": ["TS", "JS", "Python"],
    "imgs": ["looccms2", "looccms", "looccms3"]
  },
  "grafixandroid": {
    "title": "Grafix 4.0 Android",
    "text": {
      "en": "Virtual Try-On of glasses in AR on Android.",
      "de": "Virtuelles Anprobieren von Brillen in AR auf Android."
    },
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
    "text": {
      "en": "Virtual Try-On of glasses in the browser.",
      "de": "Virtuelles Anprobieren von Brillen im Browser."
    },
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
    "text": {
      "en": "Virtual Try-On of glasses in AR. Measuring of faces allowing Reframd to create customized frames.",
      "de": "Virtuelles Anprobieren von Brillen in AR. Vermessung von Gesichtern, die Reframd ermöglicht, individuelle Rahmen zu erstellen."
    },
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
    "text": {
      "en": "Measuring of faces and centration of lenses. Allowing Edel-Optics GmbH to customize orders on their web shop.",
      "de": "Vermessung von Gesichtern und Zentrierung von Linsen. Ermöglicht es Edel-Optics GmbH, Bestellungen in ihrem Webshop anzupassen."
    },
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
    "text": {
      "en": "Interactive Multi-Media AR-Installation for CSAIL MIT. Permanent digital world running on a wall installation, users can interact using their phones in AR.",
      "de": "Interaktive Multi-Media AR-Installation für CSAIL MIT. Permanente digitale Welt, die auf einer Wandinstallation läuft, Benutzer können mit ihren Telefonen in AR interagieren."
    },
    "techs": ["Unity", "Photon", "ARKit", "ARFoundation"],
    "role": "developer",
    "url": "https://www.csail.mit.edu/news/magical-garden-gates-tower",
    "release": "2022",
    "thumbnail": "logo.png",
    "langs": ["C#", "GLSL"],
    "imgs": ["largepic.jpg", "ar.jpg", "riddler.jpg"]
  },
  "recast": {
    "title": "Recast Chrome Extension & Player SSR page",
    "text": {
      "en": "letsrecast.ai, a startup focussing on AI created Podcasts, asked for a chrome extension frontend in Solid.js as well as a server-side rendered Solid.js dynamic page for individual recasts.",
      "de": "letsrecast.ai, ein Startup, das sich auf KI-generierte Podcasts konzentriert, bat um ein Chrome-Erweiterungs-Frontend in Solid.js sowie eine serverseitig gerenderte Solid.js-Dynamic-Seite für individuelle Recasts."
    },
    "techs": ["Solid.js", "React.js", "AWS Lambda, CF, S3, DynamoDB"],
    "role": "developer",
    "url": "https://letsrecast.ai/?ref=bersaelor",
    "release": "2023",
    "thumbnail": "logo.png",
    "langs": ["TS", "JS"],
    "imgs": ["recast chrome extension.png", "recast SSR"]
  },
  "urhere": {
    "title": "URHERE Art Performance Streaming Site",
    "text": {
      "en": "Media streaming website for art performances and audio walks in New York. With user management, stripe integration for payment and dynamic content loading.",
      "de": "Medien-Streaming-Website für Kunstperformances und Audio-Spaziergänge in New York. Mit Benutzerverwaltung, Stripe-Integration für Zahlungen und dynamischen Inhalten."
    },
    "techs": ["Solid.js frontend", "AWS Lambda", "CF", "S3", "DynamoDB", "Stripe"],
    "role": "architect, lead backend, lead frontend",
    "url": "https://urhere.art/",
    "release": "2023",
    "thumbnail": "logo.png",
    "langs": ["TS", "JS"],
    "imgs": ["urhere big", "urhere small"]
  }
}

export default works;