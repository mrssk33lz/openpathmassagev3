---
title: "Rust Update 123"
description: "Rust Devblog 123"
lead: "This weeks patch was a little late off the presses, but it brings back researching! Research Tables can now be looted and crafted again. They even have a custom system built around them. It's an interesting concept, as it allows you to craft items that you normally wouldn't be able to craft, but only once. I like the idea and look forward to trying it out."
date: 2016-08-19
lastmod: 2016-08-19
draft: false
weight: 50
images: ["devblog-123.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-123.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks patch was a little late off the presses, but it brings back researching! Research Tables can now be looted and crafted again. They even have a custom system built around them. It's an interesting concept, as it allows you to craft items that you normally wouldn't be able to craft, but only once. I like the idea and look forward to trying it out.

As for the rest of the update, it was filled with some tweaks and optimizations for items like holosights and candle/miner hats. There was also additional work done for weapon balancing and the damage numbers are all available on the main blog post. The netcode has been optimized for both players and projectiles this patch, which should be interesting to feel for the first few weeks. There are some additional sneak peeks on the main post as usual that highlight the upcoming changes to the lighthouse, some new cave designs for dungeons, and a Deer Skull Helmet . There are also some animations and a sweet third person screenshot for the new assault rifle.

It looks like this weeks patch was well worth the wait!

_Update_ - There has been a hotfix patch at just around midnight EST that fixes a long-standing exploit that was starting to be used heavily after this patch.

## Changelog 123
```
Updated to Unity 5.4.0p1
Removed a few shitty bird stings and cricket loops
Better volume balance and general polish on ambient sounds
Better, more varied bullet flybys and ricochets
Don't play a million ricochet or impact sounds when shotgun blasts hit the ground
More woody knock and less tearing on tree impacts
Footstep polish and consistency
Bush rustles have a lot shorter fade in and sound more natural
Misc small sound tweaks, volume balance, and polish
Increased time between songs
Never play songs before the min song gap has elapsed
Fixed alt+enter related darkening
Fixed alt+enter related rocks missing terrain blend
Added Research Bench
Added Research Paper
Large Box unlocks at level 9 (was 10)
Research Bench unlocks at level 10 (was 17)
Fixed candlehat/minerhat not working
Made holosight easier to see through
Combat log now also contains rejected attacks with a reason for rejection
Added entity pooling (pool.entities convar, disabled by default for now)
Disabled pool.skins on the server by default (doesn’t make much sense there)
Doubled projectile radius of shotgun buckshot and handmade shells
Increased rifle and pistol projectile base damage from 40 to 50
Adjusted bolt action damage so coffee can helmets let you barely survive one headshot
Increased effective distance of rifle bullets
Fixed player view direction sometimes not being shown correctly to other clients
Added some server side interaction checks to nearly all interactions
Fixed some server side garbage collection spam from auto turrets
Projectile LOS checks now use client side start position after verifying it
Attack LOS tickets are now clamped
Added additional line segment to projectile and melee hit LOS check
Added additional info to server log when rejecting attacks for LOS violations
Added attack verification to launcher weapons
Added meleedamage, arrowdamage, bulletdamage and bleedingdamage server convars
Added meleearmor, arrowarmor, bulletarmow and bleedingarmor server convars
Added admin vis.lineofsight server convar (debugging)
Added admin vis.protection client convar (debugging)
Added admin printinput and printhead console commands (debugging)
Renamed pooling stat commands to print_memory, print_prefabs and print_assets
Split pool clear command into clear_memory, clear_prefabs and clear_assets
```
_Source: https://playrust.com/devblog-123/_