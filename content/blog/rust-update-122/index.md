---
title: "Rust Update 122"
description: "Rust Devblog 122"
lead: "This weeks update is concentrated on many peformance enchancements across the board. They have also tweaked and balanced the new shotgun. This update should improve various aspects of both CPU and GPU performance, especially on older machines."
date: 2016-08-11
lastmod: 2016-08-11
draft: false
weight: 50
images: ["devblog-122.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-122.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update is concentrated on many peformance enchancements across the board. They have also tweaked and balanced the new shotgun. This update should improve various aspects of both CPU and GPU performance, especially on older machines. On the main blog there are some sneak peeks of some upcoming graphics overhauls to the lighthouse and military tunnels. There is also a really cool concept art showing a player craftable vending machine where players can sell other items to players.

## Changelog 122
```
Vm beancan animation updates
Buckshot has slightly randomized velocity (no effect on damage, purely visual)
Added more detailed logging to server side attack and projectile verification
Improved server side melee and projectile line of sight verification
Improved server side entity distance and position verification when attacked
Improved server side weapon cooldown verification
Fixed server lag being included in server side player desync calculation
Fixed some situations that could cause “invalid projectile: Missing ID”
Fixed projectiles sometimes being destroyed completely when penetrating an object
Fixed code locks only being accessible from one side when attached to gates
Fixed exploit that allowed floor stacking into floor frames by rotating walls
Fixed being able to interact with objects while wounded
New sounds for double barrel shotgun
Improved performance for visible players and animals
Added Player culling, 20-30% performance gains on populated servers
Supply Signal drop zone has 20m random radius
Removed garbage from Supply Drop loot table
Supply Signals found less often
Flamethrowers found less often
Double barrel shotgun damage multiplier increased from 0.75 to 1.0
Double barrel shotgun spread increased
Double barrel refire rate decreased from 1.0 to 0.5
```
_Source: https://playrust.com/devblog-122/_