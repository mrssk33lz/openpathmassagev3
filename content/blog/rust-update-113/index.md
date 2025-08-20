---
title: "Rust Update 113"
description: "Rust Devblog 113"
lead: "This weeks update finally sheds some light on the upcoming XP system, updates some dungeon art, fixes for a bunch of procedural map variables and added weapon mods! There are as usual a bunch of fixes, which is great to see with the looking XP system update coming."
date: 2016-06-02
lastmod: 2016-06-02
draft: false
weight: 50
images: ["devblog-113.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-113.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update finally sheds some light on the upcoming XP system, updates some dungeon art, fixes for a bunch of procedural map variables and added weapon mods! There are as usual a bunch of fixes, which is great to see with the looking XP system update coming. I'm sure they want to get a bunch of outstanding weirdness out of the way before that change this live servers. Great update overall and go Facepunch!

## Changelog 113
```
Fixed bug where a gun’s magazine would spawn out of thin air in 1st person during reload
Dungeon art monthly progress
Weapon mods can both offset and scale all weapon stats
Fixed weapon hip aim cone parameter being ignored
Fixed that only the first weapon attachment was receiving the weapon aiming state
Added layer.toggle, layer.show, layer.hide and layer.culling admin console commands
The restart console command now takes the number of seconds as an argument
The default restart timer is now 5 minutes instead of 60 seconds
Calling restart -1 cancels the server restart
Don’t try to update Steam stats if Steam is not initialized (server error)
Fixed projectile weapon repeat / reload delay inaccuracies
Optimized entity linking on both client and server
Fixed a no clipping exploit
Player model state is now updated and verified once per frame instead of once per tick
Fixed an exploit to access the F1 menu admin tools
The object quality slider no longer uses far too low quality meshes at close range
Suicides are displayed in separate column in the stats console command
Weapon attachments are no longer invisible when attached to the held weapon
Fixed being able to stack boxes partially inside walls
Fixed admins getting violations when disabling no clipping while moving very fast
Added flyhack_protection mode 2
Increased projectile LOS penalty for player to player damage
Building blocks store a unique building ID
Buildings have to keep a distance of two meters between each other
Fixed sign update issues for clients with slow connections
Stripped the .prefab extension from death screen kill messages
Procedural Map: Fixed holes in mountains
Procedural Map: Increased distance between mountains
Procedural Map: Increased monument and road density
Procedural Map: Increased minimum powerline distance
Procedural Map: Tweaked airfield and cave monument topology
Procedural Map: Increased overall number of caves on the map
Procedural Map: Decreased minimum distance between caves
Procedural Map: Enabled shore wetness on the road material
Procedural Map: Tweaked water to landmass ratio
Fixed revz related particle issues; e.g. missing fly swarm
Fixed scattering related particle issues
Added experimental large scale occlusion
Added Muzzle Booster
Added Muzzle Brake
Halved (more or less) attachment costs
```
_Source: https://playrust.com/devblog-113/_