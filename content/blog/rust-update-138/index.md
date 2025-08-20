---
title: "Rust Update 138"
description: "Rust Devblog 138"
lead: "This weeks patch is a good one. The Facepunch team has added back Caves and all servers have been wiped! Along with the addition of the Caves system, they have also added a new pistol, the M92. Currently it can only be found in Helicopter Crates and Supply Drops."
date: 2016-12-01
lastmod: 2016-12-01
draft: false
weight: 50
images: ["devblog-138.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-138.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks patch is a good one. The Facepunch team has added back Caves and all servers have been wiped! Along with the addition of the Caves system, they have also added a new pistol, the M92. Currently it can only be found in Helicopter Crates and Supply Drops. Many other changes have been included in this patch like better loot tables for components and Building Part construction cost reductions. Here is the list of parts that have had their costs reduced by at least 1/4 and up to 1/2 the resources!

- Floor grill
- Prison gate
- Prison wall
- Chainlink fence
- Chainlink gate
- Shopfront
- Metal bars
- Armored bars
- Wood bars
- Embrasure A
- Embrasure B

## Video Update
Check out this week's Video Update with a great recap of this week's changes.

<iframe width="669" height="402" src="https://www.youtube.com/embed/nxExru96iNo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 138
```
Added natural caves to the world generation
Increased default world size to 3500
Optimized world generation times of bigger maps
Increased prevent building zone around water treatment plant
Fixed lighthouse sometimes spawning far out on the ocean
Fixed some deployables being placeable partially inside constructions
Fixed pillars, walls and floors reaching into prevent building volumes
Fixed some foundation stacking exploits
Fixed some weapon firing rate exploits
Slightly stricter melee / projectile anti hack
Added sounds for the bota bag
Added sounds for the small water bottle
Viewmodel for c4
Viewmodel for satchel charge
Viewmodel for survey charge
Holdtype for c4
Holdtype for satchel charge
Holdtype for survey charge
Worldmodel for c4
Worldmodel for satchel charge
Worldmodel for survey charge
Sfx setup & sounds for for c4
Sfx setup & sounds for for satchel charge
Sfx setup & sounds for for survey charge
Halved cost for most exotic building pieces (embarsure, prison gate, chainlink etc)
Rebalanced loot tables to never have garbage in higher end loot tiers
M92 implemented
Codelocks no longer automatically unlock when code is entered
Reduced component cost for satchel charges 
Reduced component cost for ladders
Increased salvaged tool component costs
Made most military weapons uncraftable
Thrown items (satchel/c4/etc) are properly oriented to throw/land positions
Spears do more melee damage
Spears are easier to hit people with
Spears do less throw damage
```
_Source: https://playrust.com/devblog-138/_