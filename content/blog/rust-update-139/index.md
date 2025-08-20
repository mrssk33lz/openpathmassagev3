---
title: "Rust Update 139"
description: "Rust Devblog 139"
lead: "This weeks patch is choc full of fixes and optimizations. There is now stricter placement of High External gates on terrain. They have also added skin voting for items right on the main game interface when you join. Start liking your favorite Rust Workshop skins!"
date: 2016-12-08
lastmod: 2016-12-08
draft: false
weight: 50
images: ["devblog-139.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-139.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks patch is choc full of fixes and optimizations. There is now stricter placement of High External gates on terrain. They have also added skin voting for items right on the main game interface when you join. Start liking your favorite Rust Workshop skins! There are also a handful of exploit fixes included in this patch. Thanks Facepunch!

A few items are cheaper to cost in this patch:

- Mace
- Salvaged Sword
- Custom SMG

The most notable change this week is that the Facepunch team has disabled the Legacy branch. They showed the graphs to prove it, along with some awesome new concept art on an upcoming Magnum Pistol. Check it out on the Rust Devblog.

## Video Update
Here is this weeks Video Update to wrap everything up in an easy to follow way.

<iframe width="669" height="402" src="https://www.youtube.com/embed/3JMdxHZ609s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 139
```
Fixed explosive damage through walls
Added culling volumes to military tunnels
Stricter high external gate terrain placement
Reduced cave prevent building volumes
Stricter line of sight anti hack
Added server side reload time verification
Added batching to various commonly placed objects
Added support for doors to batching system
Fixed debug camera anti hack exploit
New sounds for m92
Ambient sound polish
Rotated c4 in c4 viewmodel
Updated supply signal viewmodel
Tier2 Loot table distirbution normalized
Mace is cheaper
Salvaged Sword is cheaper
Custom SMG is cheaper
Hemp has minimum placement distance
Stuck projectiles keep alignment with their attack vector rather than surface normal
Shorter sprint blocking duration when using melee
Sprint block happens when melee strike happens instead of windup (more responsive)
Repairing items requiring components are no longer free to repair.
Sheet metal recycles into more resources than before
```
_Source: https://playrust.com/devblog-139/_