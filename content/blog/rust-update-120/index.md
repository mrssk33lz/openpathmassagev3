---
title: "Rust Update 120"
description: "Rust Devblog 120"
lead: "This weeks update brings some game balance to weapons, some tweaks to raiding, and continued tweaking of the graphics system. The are also some cool sneak peeks on the Rust site for upcoming new items like the satchel charge and double-barrelled shotgun."
date: 2016-07-28
lastmod: 2016-07-28
draft: false
weight: 50
images: ["devblog-120.png"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-120.png" alt="Square" class="border-0 rounded-circle" >}}

This weeks update brings some game balance to weapons, some tweaks to raiding, and continued tweaking of the graphics system. The are also some cool sneak peeks on the Rust site for upcoming new items like the satchel charge and double-barrelled shotgun.

## Changelog 120
```
Vm grenade anim updates
Fixed TSSAA related dark screen bug on OSX/GL
Improved graphics performance again
Added server side combat log (access with combatlog console command)
Reduced max projectile damage falloff over distance
Increased projectile damage falloff distance
Increased effective distance, projectile velocity and damage of semi auto rifle
Spears use arrow damage type when thrown
Removed bullet damage type from all throwables
Throwables now use their own damage multipliers
Twig building tier takes damage from arrows again
Thrown items lose condition on impact and break when their condition reaches zero
Thrown items no longer randomly break and disappear
Grenades stack to 5
Grenades can be dropped with right click
When looking at constructions, right click attaches grenades to them
Grenades don’t do splash damage to constructions when attached
Fixed projectiles very rarely breaking / sticking with break / stick probability of zero
Improved skinned mesh collider performance
Fixed being able to build bridges with picture frames
Benchmark scenes force deterministic RNG results
```
_Source: https://playrust.com/devblog-120/_