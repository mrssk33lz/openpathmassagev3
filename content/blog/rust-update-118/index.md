---
title: "Rust Update 118"
description: "Rust Devblog 118"
lead: "This week brings in a bunch of fixes and tweaks to the XP leveling system, as well as a new hitbox system that is based on overall armor level instead of individual item coverage."
date: 2016-07-14
lastmod: 2016-07-14
draft: false
weight: 50
images: ["devblog-118.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-118.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week brings in a bunch of fixes and tweaks to the XP leveling system, as well as a new hitbox system that is based on overall armor level instead of individual item coverage. There are also a few performance and graphics tweaks, as well as some exploit fixes and anti-hack updates to round out this weeks patch. There were a handful of smaller hotfixes throughout the week, that I am not sure are included in this changelog or not.

## Changelog 118
```
New hitbox system (clothing no longer affects hitboxes)
New weapon damage model (more predictable body damage multipliers)
New projectile weapon hit detection (best-fit hit detection for reliable results)
New clothing and armor protection system (less random protective properties)
Animals now also use detailed hitboxes with damage multipliers
3rd person pre-throw animations for rock and spears
Fixed bug with eyeballs popping out when holding construction planner
Large furnace no longer placable in water
Fixed dropped weapons not changing ownership
Fixed flamethrower particles bouncing around
Small water catcher uses tap collider for +use (instead of entire object)
No more double xp from breaking objects you have looted
Added xp.reseteverything command for server owners to reroll characters
Crossbow vm anim updates
Fixed head clipping through Wolf Head Dress
Fixed base design exploit that was immune to rocket damage
Fixed rare cases where building could be blocked everywhere
Fixed an exploit to place objects though rocks
Fixed helicopter exploit using glass windows of monument buildings
Fixed water purifier interaction issues on server restart
Fixed rare AntiHack false positives from legacy code
Fixed rare AntiHack projectile verification false positive
Added server.branch convar (forces certain branch for connecting clients)
Updated EAC
```
_Source: https://playrust.com/devblog-118/_