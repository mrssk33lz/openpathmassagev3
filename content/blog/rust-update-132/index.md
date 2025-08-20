---
title: "Rust Update 132"
description: "Rust Devblog 132"
lead: "This weeks update gives a first look at the Rust Steam Workshop integration. This will allow players to create and submit their own skins easily to the Rust Steam Workshop."
date: 2016-10-20
lastmod: 2016-10-20
draft: false
weight: 50
images: ["devblog-132.png"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-132.png" alt="Square" class="border-0 rounded-circle" >}}

This weeks update gives a first look at the Rust Steam Workshop integration. This will allow players to create and submit their own skins easily to the Rust Steam Workshop. There have been some new components added to the pre-release branch for those interested in testing out the new component system more. Last weeks patch apparently increased the map load times when connecting a bit, so some optimizations have been done there this week to reduce the load time by 6x!

Additional worldmodels have started being added to reduce the amount of items that display as just small burlap sacks on the ground. These include:

- LR300
- double shotgun
- bota bag
- silencer
- scope
- holosight
- muzzle boost
- muzzle break
- building plan

This will be a great feature once it's fully rounded out in the coming weeks. We have the usual sound, graphics, and performance tweaks to round out this weeks Changelog.

## Video Update
<iframe width="800" height="450" src="https://www.youtube.com/embed/BusifwHXlNQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 132
```
New mp5 sounds
Misc sound voice count optimizations
Misc sound bugfixes
Fixed rare NRE with sentry turret
Fixed hit decals not showing on shadowed or unlit areas
Fixed underwater FX not showing
Fixed weapon attachments sliding when using TSSAA
Improved and optimized rain effect
Improved map loading times
Fixed a client side entity leak
Enabled player collider and nametag pooling by default
Fixed an exploit that would bypass the server side attack verification
Fixed an exploit that would bypass the server side attack cooldown
Fixed the censorship cubes sometimes not showing when they should
Fixed rare NRE with the sign texture update
Camera worldmodel added + LODS
world model for LR300 when dropped + LODS
world model for double shotgun when dropped + LODS
world model for bota bag when dropped + LODS
world model for silencer when dropped + LODS
world model for scope when dropped + LODS
world model for holosight when dropped + LODS
world model for muzzle boost when dropped + LODS
world model for muzzle brake when dropped + LODS
world model for building plan when dropped + LODS
```
_Source: https://playrust.com/devblog-132/_