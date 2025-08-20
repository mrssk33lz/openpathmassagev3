---
title: "Rust Update 127"
description: "Rust Devblog 127"
lead: "This weeks update includes better sounds for explosions and game music optimizations. Semi-auto pistols have been nerfed by 10 damage and pistol bullets drop faster over distances to stop semi-auto pistol sniping."
date: 2016-09-15
lastmod: 2016-09-15
draft: false
weight: 50
images: ["devblog-127.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-127.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update includes better sounds for explosions and game music optimizations. Semi-auto pistols have been nerfed by 10 damage and pistol bullets drop faster over distances to stop semi-auto pistol sniping. Hopefully this helps, as I have noticed I typically just run around with semi-auto pistol b/c of how well they work. Other fixes have been made around projectiles and various graphics glitches like stuttering. There is also some more info about the upcoming caves and updates on the lighthouse revamp.

## Changelog 127
```
Better explosion sounds
Misc sound polish
Old bone armor no longer drops( will be removed next wipe)
Projectile CPU optimizations
Semi auto pistol damage nerfed to 40 (was 50)
Pistol ammo effective distance nerfed to 60 (was 80)
Fixed players sometimes appearing with wrong name, gender or skin tone
Fixed various small client side network interpolation issues on respawn
Added stabilityqueue server convar (building stability update time per frame)
Added surroundingsqueue server convar (surroundings refresh time per frame)
Fixed various issues with player model pooling
Enabled player model pooling by default on 64bit systems (pool.players convar)
Drastically improved entity destruction performance (less stuttering)
Optimized player mesh building and refreshing (less stuttering)
Fixed exception when trying to upgrade building block after it was destroyed
Fixed exception when trying to rotate building block after it was destroyed
```
_Source: https://playrust.com/devblog-127/_