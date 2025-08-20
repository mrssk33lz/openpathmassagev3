---
title: "Rust Update 111"
description: "Rust Devblog 111"
lead: "There are a ton of fixes this week, and just a few additions such as decay on other deployables like tool cupboards, barricades, and traps. We will probably turn this off on our server, because decay is outrageously fast for some reason. Other than that there are a few more tweaks to hack detections and blocking."
date: 2016-05-19
lastmod: 2016-05-19
draft: false
weight: 50
images: ["devblog-111.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-111.jpg" alt="Square" class="border-0 rounded-circle" >}}

There are a ton of fixes this week, and just a few additions such as decay on other deployables like tool cupboards, barricades, and traps. We will probably turn this off on our server, because decay is outrageously fast for some reason. Other than that there are a few more tweaks to hack detections and blocking. There is also a cool new concept for a Harbor Rad Town that looks promising for some new scenery and tactics. The biggest pickup on the server-side this week is per server stat tracking. This should prove interesting and could replace the Oxide plugin we just installed to track this sort of data. The tension is building at this point for a report from Gary on the new experience system. Hopefully we are seeing some cleanup this week in preparation for at least some insight into the impending change to the blueprint system.

## Changelog 111
```
Added deployable decay to sleeping bags, tool cupboards, barricades and traps
Tool cupboards can be repaired
Added server side stat tracking (separate for every server instance)
Added projectile line of sight tracking (no enforcement yet)
Added lineofsight_protection server convar (only toggles tracking for now)
Increased available time to harvest plants before they die
Hemp can be harvested for reduced cloth when small
Ignore projectiles from stalled players
Take player lag into consideration for server side projectile speed verification
Projectile entity distance verification takes entity speed into account
Include player and target names in server side projectile logs
No longer give anti hack violations to players that are stuck behind doors
Improved fly hack detection (fixed a potential false positive)
Fixed overly bright clouds at night
Fixed blurry Facepunch logo on low quality settings
Fixed issue that could render the water purifier invisible
Fixed issue where the water purifier bucket could not be interacted with
Fixed potential server crash caused by water bucket
Fixed line of sight loot exploits
Fixed exploit to disable gunshot sounds
Fixed survey charge particle effect rotation
Added decay.tick server startup parameter (specifies decay tick interval)
Fixed estimated player velocity being extremely inaccurate during server lag
Player animation tweaks
Fixed offset Holosights
Fixed issue with revz not being set causing rendering problems
Fixed revz darkening environment
Fixed revz player preview
Fixed revz deferred lighting and reflections
Fixed revz missing decals, player tags, holosight dot, lantern glass
Fixed revz missing heli body and heli interiors
Fixed revz painting signs
Fixed revz greyboxes not visible
Fixed revz horse hair, helicopter glass seen through objects
Fixed revz menus darkening water
Fixed horse hair discoloration
Fixed teddy bear mesh + material
Fixed water simulation issue causing seams in shore blend
Fixed speedtree billboards in d3d9
Fixed pitch black shadow on grass when shader level < 300
Fixed pitch black horse lowest LOD mesh
Fixed ocean and rivers not showing specular highlights for secondary lights
Fixed research table glass shader
```
_Source: https://playrust.com/devblog-111/_