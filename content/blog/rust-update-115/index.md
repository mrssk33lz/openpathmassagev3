---
title: "Rust Update 115"
description: "Rust Devblog 115"
lead: "This week's Rust update brings some improvements to the updated decay system, a new map called Barren is available in the pre-release branch, and cheaters will start to have their main accounts banned."
date: 2016-06-16
lastmod: 2016-06-16
draft: false
weight: 50
images: ["devblog-115.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-115.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week's Rust update brings some improvements to the updated decay system, a new map called Barren is available in the pre-release branch, and cheaters will start to have their main accounts banned. It would be nice to see other Steam games like CS:GO implement this sort of banning method, as it's really just too easy to buy a new game and keep hacking to protect your main account. Some improvements to performance to color grading and occulsion have been made, which will help those who run those settings, especially on lower-end cards. Last but not least, we have finally got a release date for the upcoming XP system. All current changes to the XP system are on the pre-release branch. All pre-release changes will be merged on the next forced wipe on July 7th. Also, returning on the July 7th wipe is radiation to certain areas of the map. We have started adding this through a plugin recently, but we will see how the default system works.

## Changelog 115
```
Changed decay of most deployables to 2 days delay and 2 days duration
Changed decay of boxes and furnaces to 2 days delay and 4 days duration
Changed default decay tick interval to 10 minutes
Most deployables can now be repaired
Fixed incorrect collision meshes on twig roof sides
Terrain collision is now always reset when admin cheat is toggled
Added server side client tick flooding protection
Added maxflood server convar (allowed player ticks per second)
Player position ticks are now processed as a curve on the server
Added noclip_protection mode 3 (verifies movement on position curve)
Added noclip_stepsize and noclip_maxsteps server convars
Increased strictness of fly and speed hack detection
Improved color grading performance
Improved ambient occlusion performance
Added back river flow
Added river foam
```
_Source: https://playrust.com/devblog-115/_