---
title: "Rust Update 108"
description: "Rust Devblog 108"
lead: "Rust Update 108 has brought some performance fixes in a few departments along with some teasers of new flame physics. Nothing mentioned about the upcoming XP tree, so Gary must be busy."
date: 2016-04-28
lastmod: 2016-04-28
draft: false
weight: 50
images: ["devblog-108.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-108.jpg" alt="Square" class="border-0 rounded-circle" >}}

Rust Update 108 has brought some performance fixes in a few departments along with some teasers of new flame physics. Nothing mentioned about the upcoming XP tree, so Gary must be busy.

## Changelog 108
```
New eat/drink sounds
New flamethrower sounds
Fixed gradual ambience performance degradation bug
Fixed coroutine leak in entity particle emission
Optimized building block despawns some more
Fixed another performance issue when looking at players
Fixed tree culling performance issue caused by wind
Optimized UI variable display code
Adjusted grass LODing (less upscaling on lower LODs)
Updated player preview idle
Added wave displacement to water quality level 1
Limited shadow distance to 50 when shadow cascades are disabled
Icesheet prefabs use LOD grid
Fixed horizon sky / water blending
Improved aerial perspective density computation
Added shadowmode convar to adjust sun shadow casting
Sun shadows disable completely when shadow distance is set to 0
Added additional procgen benchmarks
Procgen benchmarks reset GC, LODs, grass, decor and tasks before every run
Stripped legacy fog modes from shader compilation and scenes
Fixed that the door animation was stopped one frame too early
Fixed regression that sometimes skipped entity linking when building
Fixed entities not sending slot updates when server side changes are made
Made perf convar display async task queue when set to 6
Server restart command calls quit command after the timer reaches 0
Fixed missing ignite and extinguish icons on small furnace
Slightly higher starting calories
Fixed flames doing less damage to objects when sitting on stone/metal
Map cost reduced to 1 paper
Fixed water barrels not blocking building
Fixed water bucket having drink as default option (impossible to deselect)
Fixed being able to transfer water into an unheld bucket
```
_Source: https://playrust.com/devblog-108/_