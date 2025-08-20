---
title: "Rust Update 131"
description: "Rust Devblog 131"
lead: "This weeks update enables Double XP until the new component system is ready, w00t! It looks like the new update video format is here to stay for now, so we will be including them in our weekly Rust Update posts."
date: 2016-10-13
lastmod: 2016-10-13
draft: false
weight: 50
images: ["devblog-131.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-131.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update adds the new Natural Caves to the map on pre-release. That must mean we should be seeing them added for the next map wipe. It also adds the new MP5 gun to Live servers with an included buff to the silencer to drop it's audible range by over 50% and actually hide tracers. The LR3000 rifle is now craftable due to popular demand, which should up the gunplay on most servers. As usual there are a handful of graphics and performance optimizations scattered into the Changelog below. Checkout the Rust Blog for more teasers on the upcoming Hazmat Suit redesign and new props for industrial areas.

## Video Update
Here is this weeks video update summary:
<iframe width="669" height="402" src="https://www.youtube.com/embed/dfdFyDvdQy0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 131
```
Updated bota bag vm anims
Fixed certain entities sending network updates before they were spawned
Held entities always destroy immediately (stop following pooled / destroyed parents)
Fixed pumpkin not shown on player after initial use
Added mesh renderer support to player clothes pooling
Added find_entity / find_id / find_group / find_parent admin commands
Fixed players motion blur visible behind walls (regression)
Fixed moon rendering black to reflection probe
Fixed moon darkening when closer to the horizon
Fixed foliage displacement missing some spots (wip)
MP5 Added
LR300 Craftable
Silencer sound range reduced to 40m (was 100)
Silencer now hides tracers
```
_Source: https://playrust.com/devblog-131/_