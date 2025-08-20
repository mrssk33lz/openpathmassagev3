---
title: "Rust Update 121"
description: "Rust Devblog 121"
lead: "This week Facepunch has addressed some concerns brought up by the community about some current changes and have _fixed_ some of these issues."
date: 2016-08-04
lastmod: 2016-08-04
draft: false
weight: 50
images: ["devblog-121.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-121.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week Facepunch has addressed some concerns brought up by the community about some current changes and have _fixed_ some of these issues. The crossbow has been de-nerfed, building pieces now can be rotated, and there have been lots of tweaks and balancing to armor and weapons. We also have some new additions to the game with the double-barrelled shotgun and the satchel charge. On the main blog we get some sneak peeks at some upcoming new additions to the game like door traps and a new assault rifle.

## Changelog 121
```
Full clothing and armor balancing pass (15% more body damage when fully geared)
Protections from clothing and armor now add up (all slots required for max protection)
Bleeding is displayed as total damage that will be applied over the bleeding duration
Increased bleeding rate to 20 damage per minute (instead of barely any at all)
Increased bleeding from weapons to 20% of the applied damage
Revive takes 6 seconds to complete (holding down E)
Cannot move while reviving
Revive attempts delay player death
Bandage and syringe no longer revive players
Increased player wounded time (now 40-50 seconds)
Reduced projectile radius of slugshot, buckshot, arrows and explosive rounds
Increased headshot multiplier of throwables and arrows to 1.5 (from 1.25)
Pressing R rotates placement guide of deployables and building blocks
Server now verifies projectile path between checkpoints (anti hack)
Projectiles can be picked up immediately after they hit something
Combat log now correctly displays the last 30 entries
Combat log now includes the ammo type
Semi auto pistol now holds 10 rounds (from 8)
Revolver now holds 8 rounds (from 6)
Fixed semi auto pistol doing 39.99 damage instead of 40.00
Fixed being unable to bandage other players
Fixed feet hitboxes being outside of the collision bounds on wounded players
Fixed rock box stacking exploits
Fixed grenade viewmodel sometimes getting stuck in throwing animation
Fixed layer toggle with no name in F1 tools
Fixed player jump animation not playing
Added hurt admin console command (takes amount of damage as parameter)
Improved rendering performance again
Improved player preview lighting; added anti-aliasing
Fixed flow around player preview
Fixed Hapis lake waves
Fixed TSSAA flickering when switching items
Fixed revz not defaulting to 1 when client cfg is missing
Fixed rock/cliff texturing, female skin and other glitches introduced a couple of weeks ago
Can sprint with crossbow again
Halved crafting time for ladder, bed, campfire, ceiling light, cupboard, bow, xbow
More than halved crafting time for Explosives and Gunpowder
Added Satchel Charge
Fixed explosive rounds dealing double explosive damage
Slightly increased cost of beancan grenades
Reduced cost of C4 by 20%
Armored door available at level 17
Added XP earners for healing other players
Removed Gathering diminishing xp from other players (more xp sooner)
Shelves unlock at Level 5 + 80% cheaper
Reduced metal cost of woodwire, metal barricades
Reduced level requirements of wood, woodwire, metal barricades + spike trap
Added Double Barrel Shotgun
Autoturret health increased to 1000
Autoturret damage increased 50%
Autoturret protection from satchels/beancans increased 50%
Loot tables for radtowns handcrafted and contain less junk
Ammo stacks can be found in radtowns
Max condition of items is shown as a red bar
Fixed weapon viewmodels sometimes being partially see-through (exploit)
```
_Source: https://playrust.com/devblog-121/_