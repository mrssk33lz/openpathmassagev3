---
title: "Rust Update 119"
description: "Rust Devblog 119"
lead: "This week's update brings a ton of fixes related to the new XP System update and gameplay in general. There are also a bunch of optimizations this week to graphics and the sentry gun now unlocks much earlier at level 18 instead of 24."
date: 2016-07-21
lastmod: 2016-07-21
draft: false
weight: 50
images: ["devblog-119.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-119.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week's update brings a ton of fixes related to the new XP System update and gameplay in general. There are also a bunch of optimizations this week to graphics and the sentry gun now unlocks much earlier at level 18 instead of 24. Overall it looks like a solid update worth of fixes and optimizations to make grinding out the new XP system more enjoyable. Have fun out there Rustafarians!

## Changelog 119
```
Melee weapons now hit centre of the screen again
Pickaxe viewmodel is now the right way round
Longer crossbow deploy
Fixed patrol helicopter guns not doing any damage to building blocks
Added arrow damage type (so armor can specify separate protection values)
Structures no longer take any damage from arrows
Cupboards no longer require a huge distance from walls on placement
Cupboards can no longer be placed on foundation stairs (exploit fix)
Projectile velocity is no longer randomised (no longer causes random damage)
Projectile damage falls off linearly with distance (after initial max damage distance)
Fixed exception when shooting head protective gear that’s fully broken
Reduced shotgun buckshot headshot damage multiplier
Reduced crossbow headshot damage multiplier (now identical to bow)
Fixed rocket LOS check false positives on some building parts
Fixed missing bone ID of some animal skeleton bones (game manifest)
Changed the assigned body parts of some lower body player bones (more accurate)
Sprinting blocked while reloading Crossbow
Crossbow deploy length extended
Neck is no longer considered as a headshot
Fixed helicopter loot crates being empty sometimes
Crafting cost reduced for many melee weapons (mid/late game)
High end weapons found slightly less often in radtowns (bolt/ak)
Trash piles refresh their contents (and xp) more often
Can no longer stuff random items into loot boxes to prevent them despawning
Town sign cost decrease
Crude oil will once again spawn from oil barrels
Ceiling lights are cheaper and cast more light
Lanterns/Ceiling lights use much less fuel
Roadsign armour is more expensive (resources)
Xp from barrels is only awarded if the destroyer is nearby (no more sniping barrels for xp)
Small stash cost reduced to 10 cloth
Sentry gun unlocks at level 18 instead of 24
Lasersight unlocks at 24 instead of 25
Wood doors much more vulnerable to explosives
Resource providing ownership share increased to 50% (was 20%)
Xp gain when another player kills an animal using your tool
Doubled max XP for smashing barrels and finding loot crates (less falloff at higher levels)
Increased gathering max xp by 50% ( less falloff at higher levels )
Increased xp earn rate from others gathering wood/nodes
Fixed black graphic distortion in dungeon tunnels
Fixed some trees not using normal map properly
Fixed revz missing name plates in OpenGL
Reduced overall surface shader complexity
Reduced water shader complexity
Added new faster option for reflections (now default)
Optimised bloom: now ~30% faster
Optimised climate color grade LUT blending (5x faster)
Now disabling climate LUT blend when color grading is off
Optimised eye adaptation (2x faster)
Default water quality now set to 1
```
_Source: https://playrust.com/devblog-119/_