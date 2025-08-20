---
title: "Rust Update 112"
description: "Rust Devblog 112"
lead: "This week brings a bunch of new fixes to the game including some performance tweaks and graphics issues. There are some new sounds that have been added and a new tools tab for admins on the F1 screen."
date: 2016-05-26
lastmod: 2016-05-26
draft: false
weight: 50
images: ["devblog-112.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-112.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week brings a bunch of new fixes to the game including some performance tweaks and graphics issues. There are some new sounds that have been added and a new tools tab for admins on the F1 screen. Still no sign of the experience tree changes, so they must be on radio silence about that until it is ready for testing and feedback. The suspense is killing me!

## Changelog 112
```
Added physics sounds for in world items
Added more inventory item pickup/drop sounds
New fish/meat cutting sounds
Added projectile line of sight protection
Resources can now also spawn inside the tool cupboard radius
Fixed performance issues caused by an entity leak at the center of the map
Fixed certain anti hack values not resetting on player disconnect
Fixed water catchers not taking any damage from explosions
Fixed water catchers taking very low damage from melee weapons
Fixed water catchers not using the load balanced LOD system
Fixed players and projectiles colliding with certain farmed plants
Added additional entity info when projectiles are ignored by the server
Added player stall time to projectile desync server messages
Added projectile_desync server convar (max allowed client desync)
Added new F1 tools tab for admins (toggle object visibility)
Added water caustics
Fixed alt + enter crash
Fixed revz broken censor boxes
Fixed revz water splashes and other refractions
Fixed revz underwater thickness
Fixed revz d3d9 issues; flickering sky, holosight, blinds artifacts
```
_Source: https://playrust.com/devblog-112/_