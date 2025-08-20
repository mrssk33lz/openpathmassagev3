---
title: "Rust Update 110"
description: "Rust Devblog 110"
lead: "This week's update introduces more new items including the water purifier, women's clothing, and farmable hemp! There are a bunch of bug fixes across the board including antihack fixes, more sound tweaks, and fixed a longstanding bug in decay. Large community servers should be able to run longer without wiping, as restarts no longer affect decay."
date: 2016-05-12
lastmod: 2016-05-12
draft: false
weight: 50
images: ["devblog-110.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-110.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week's update introduces more new items including the water purifier, women's clothing, and farmable hemp! There are a bunch of bug fixes across the board including antihack fixes, more sound tweaks, and fixed a longstanding bug in decay. Large community servers should be able to run longer without wiping, as restarts no longer affect decay. Still no word about the impending experience update that Gary has been working on, so stay tuned! See the full Devblog 110 changelog below.

## Changelog 110
```
Optimized and improved 3rd person player animations
More sound mix tweaks
New fish caught sounds for traps
Decay states save and load on server restart
Decay uses less server memory
Building block decay timer correctly resets when fully repaired
Fixed viewmodels spazzing out for one frame when deployed
Client load balancer pauses other work while network packets have to be processed
Fixed roof side conditional models occasionally missing on the client
Fixed entity pool warning when certain pine trees were destroyed
Repairing now requires all types of resources an object costs (instead of just one)
Fixed plant entity leak when their happiness was stuck around zero
Plant skins use prefab pooling for performance
Plant server convars actually do what they claim to do
Fixed planting and harvesting particle effect rotations
Added hemp seeds and hemp farming
Wild corn and pumpkins always spawn next to rivers
Reduced driftwood decor object density
Dialed back tint randomization of wild hemp
Fixed possible server side NaN / infinity positions of physics entities
Tightened valid cupboard placement angle
Fixed world models, ragdolls and debris ignoring cave triggers
Fixed server projectiles like rockets ignoring cave triggers
Fixed floating deployables in caves
Fixed turret line of sight check in caves
Fixed patrol helicopter and turret not seeing and firing through fences
Added anti hack kick counter to admin status command
Added another layer of fly hack protection
Added server side projectile speed verification
Powerline cables now cast shadows
Powerline cables are now affected by fog
Fixed seam in river transition to ocean caused by fog
Added halterneck and skirt
Silencer durability increased
Silencer damage reduction slightly reduced
Added water purifier
Can no longer codelock fish traps
```
_Source: https://playrust.com/devblog-110/_