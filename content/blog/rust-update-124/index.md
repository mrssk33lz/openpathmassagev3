---
title: "Rust Update 124"
description: "Rust Devblog 124"
lead: "This weeks update introduces the new LR300 Assault Rifle. It's a rare loot drop that cannot be researched for crafted. Lots of information about this new gun on the main Rust blog post. There have been a bunch of fixes and optimizations for graphics and sound."
date: 2016-08-25
lastmod: 2016-08-25
draft: false
weight: 50
images: ["devblog-124.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-124.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update introduces the new LR300 Assault Rifle. It's a rare loot drop that cannot be researched for crafted. Lots of information about this new gun on the main Rust blog post. There have been a bunch of fixes and optimizations for graphics and sound. Flashlights will look a bit differently due to changes that affect how players see them like distance and brightness. You can also now pick up your sleeping bag and move it elsewhere. As usual you can also find some cool sneak peeks on the main Rust blog. This week they are showing off the Bone Armor rework, which will go live next patch. They are also showing off some more of the upcoming changes to the Lighthouse and a new Flame Turret concept.

## Changelog 124
```
Enabled entity pooling by default on 64 bit systems
Enabled sound pooling by default on 64 bit systems
Optimized entity realm list access on client and server
Optimized door animator initialization when entity pooling is enabled
Load balanced building block skin creation
Load balanced destruction of all client side entities
Added entity pooling support to storage boxes
Added experimental player mesh pooling (pool.players, disabled by default)
Fixed expensive UI rebuilds whenever a player or sleeper was received
Fixed expensive UI rebuilds whenever a shot was fired
Fixed several “Can not play disabled audio source” warnings
New collectable pickup sounds (mushroom, stones, stumps)
New research table sounds
Fixed a bug where some sounds wouldn’t play with sound pooling enabled
Misc sound tweaks & polish
Fixed bug where sleep anim would sometimes play when the player jumped in/out of water
Optimized ragdoll visibility updates
Fixed see through walls caused by Motion Blur or TSSAA
Fixed terrain shadows
Fixed skin lighting
Fixed visual artifacts on some glsl challenged drivers (OpenGL)
Fixed stretched river flows on Hapis
Fixed god rays when revz is enabled
Added deferred mesh decals
Increased flashlight emission point brightness
Decreased flashlight beam brightness
Fixed invisible helicopter gibs if destroyed far away
Added LR300
Sleeping bags are pickupable
```
_Source: https://playrust.com/devblog-124/_