import * as THREE from 'three';

export default {
  // hall
  foxr_tex: { url: 'foxr.png', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  hall_model: { url: 'hall.glb' },
  generic_controller_model: { url: 'generic_controller.glb' },
  lightmap_tex: { url: 'lightmap.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  controller_tex: { url: 'controller.basis' },
  doorfx_tex: { url: 'doorfx.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping }},
  sky_tex: { url: 'sky.png', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  clouds_tex: { url: 'clouds.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  teleport_model: { url: 'teleport.glb' },
  beam_tex: { url: 'beamfx.png' },
  glow_tex: { url: 'glow.basis', options: { encoding: THREE.sRGBEncoding} },
  newsticker_tex: { url: 'newsticker.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  zoomicon_tex: { url: 'zoomicon.png', options: { encoding: THREE.sRGBEncoding } },

  // panoramas
  panoballfx_tex: { url: 'ballfx.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping } },

  stereopanoL: { url: 'stereopanoL.basis', options: { encoding: THREE.sRGBEncoding }},
  stereopanoR: { url: 'stereopanoR.basis', options: { encoding: THREE.sRGBEncoding }},
  pano1: { url: 'stereopano_small.basis', options: {encoding: THREE.sRGBEncoding} },

    pano2: { url: 'Ocean.jpg', options: { encoding: THREE.sRGBEncoding, flipY: true} },
    pano3: { url: 'Tea_plantation.jpg', options: { encoding: THREE.sRGBEncoding, flipY: true} },
    pano4: { url: 'Mine.jpg', options: { encoding: THREE.sRGBEncoding, flipY: true} },
    pano5: { url: 'Museum.jpg', options: { encoding: THREE.sRGBEncoding, flipY: true} },
    pano6: { url: 'Ancient_rome.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },

  // graffiti
  spray_model: { url: 'paintingBrush.glb' },
  //spray_model: { url: 'spray.glb' },
  //spray_tex: { url: 'spray.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },

  // vertigo
  animationRoom_model: { url: 'animation_room.glb' },
    animationRoom_panel_tex: { url: 'animationRoom_panel_tex.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  //vertigo_door_lm_tex: { url: 'vertigo_door_lm.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  //vertigo_lm_tex: { url: 'vertigo_lm.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  //checkboard_tex: { url: 'checkboard.basis', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping, repeat: [4, 4] } },
    Astronaut1_map: { url: 'Astronaut1.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    Astronaut1_aO: { url: 'Astronaut1_aO.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    Astronaut2_map: { url: 'Astronaut2.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    Astronaut2_aO: { url: 'Astronaut2_aO.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV0_map: { url: 'GSLV0_map.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV0_normal: { url: 'GSLV0_normal.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV0_metallness: { url: 'GSLV0_metallness.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV1_map: { url: 'GSLV1_map.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV1_normal: { url: 'GSLV1_normal.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV1_metallness: { url: 'GSLV1_metallness.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV2_map: { url: 'GSLV2_map.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV2_normal: { url: 'GSLV2_normal.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    GSLV2_metallness: { url: 'GSLV2_metallness.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    Satellite_commonNormal: { url: 'Satellite_commonNormal.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    Satellite_map: { url: 'Satellite_map.basis', options: { encoding: THREE.sRGBEncoding, flipY: false, wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping } },
    Satellite_metallness: { url: 'Satellite_metallness.basis', options: { encoding: THREE.sRGBEncoding, flipY: false, wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping } },
    Satellite_normal: { url: 'Satellite_normal.basis', options: { encoding: THREE.sRGBEncoding, flipY: false, wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping } },


  // sound
  //sound_model: { url: 'sound.glb' },
  //sound_door_model: { url: 'sound_door.glb' },
  //sound_shadow_tex: { url: 'sound_shadow.png' },
  //sound_door_lm_tex: { url: 'sound_door_lm.jpg', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping} },
  //grid_tex: { url: 'grid.png', options: { wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping, repeat: [20, 20] } },

  // photogrammetry object
  pg_floor_tex: { url: 'travertine2.basis', options: { encoding: THREE.sRGBEncoding, flipY: false, wrapT: THREE.RepeatWrapping, wrapS: THREE.RepeatWrapping} },
  //pg_floor_lm_tex: { url: 'pg_floor_lm.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  pg_door_lm_tex: { url: 'pg_door_lm.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  //pg_object_tex: { url: 'angel.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  pg_object_model: { url: 'buddha.glb' }, // TODO: try draco version, angel.min.gl
  pg_bg_tex: { url: 'pg_bg.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
  pg_flare_tex: { url: 'flare.jpg', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    pg_panel_tex: { url: 'panel_tex.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    pg_object0_tex: { url: 'Buddha_0.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    pg_object1_tex: { url: 'Buddha_1.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    pg_object2_tex: { url: 'Buddha_2.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },
    pg_object3_tex: { url: 'Buddha_3.basis', options: { encoding: THREE.sRGBEncoding, flipY: false } },

  // paintings
    painting_seurat_tex: { url: 'paintings/EurasianJay.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_sorolla_tex: { url: 'paintings/bird.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_bosch_tex: { url: 'paintings/Battleship.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_degas_tex: { url: 'paintings/Parrot.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_rembrandt_tex: { url: 'paintings/Marsrover.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_alps_tex: { url: 'paintings/Alps.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },
    painting_blackBird_tex: { url: 'paintings/Blackbird.basis', options: { encoding: THREE.sRGBEncoding, flipY: false} },

  // sounds
  video_snd: { url: 'ogg/Video.ogg' },
  underwater_snd: { url: 'ogg/underwater.ogg' },
  plantation_snd: { url: 'ogg/plantation.ogg' },
  mining_snd: { url: 'ogg/mining.ogg' },
  museum_snd: { url: 'ogg/museum.ogg' },
  monument_snd: { url: 'ogg/monument.ogg' },
  teleport_a_snd: { url: 'ogg/teleport_a.ogg' },
  teleport_b_snd: { url: 'ogg/teleport_b.ogg' }
};

