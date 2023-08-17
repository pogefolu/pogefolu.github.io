/*
	Folders have a dictionary as value containing all subfolders or files.
	Files have an array as value, containing all menu ids in them.
	Names are concatenated to form a path with game/ as prefix. 
		Example: game/Characters/Cheerleader/cheerleader_clothing_fix.rpy
*/

const GAME_FILES = {
	'Characters': {
		'Cheerleader': {
			'cheerleader_clothing_fix.rpy': [],
			'cheerleader_homework.rpy': [],
			'cheerleader_interact.rpy': ["cheerleader_text_menu"],
			'cheerleader_summons.rpy': [],
		},
		'Firebrand': {
			'firebrand_interact.rpy': ["firebrand_text_menu"],
			'firebrand_party.rpy': [],
			'firebrand_summons.rpy': [],
		},
		'Jock': {
			'jock_control.rpy': ["jock_control_menu"],
			'jock_interact.rpy': ["jock_interact_menu", "jock_text_menu"],
			'jock_masturbation.rpy': ["jock_masturbation_help_menu"],
			'jock_summons.rpy': [],
			'jock_workoutwear_quest.rpy': [],
		},
		'Minor_Characters': {
			'busty.rpy': [],
			'minor_characters.rpy': [],
			'student.rpy': ["student_interact_menu"],
		},
		'Nerd': {
			'nerd_control.rpy': ["nerd_control_menu"],
			'nerd_interact.rpy': ["nerd_interact_menu", "nerd_text_menu"],
			'nerd_masturbation.rpy': ["nerd_masturbation_help_menu"],
			'nerd_mmo.rpy': [],
			'nerd_summons.rpy': [],
		},
		'Principal': {
			'principal_interactions.rpy' : ["principal_interact_menu", "principal_control_menu", "principal_text_menu"]
		},
		'Slacker': {
			'slacker_control.rpy': ["slacker_control_menu"],
			'slacker_interact.rpy': ["slacker_interact_menu", "slacker_text_menu"],
			'slacker_masturbation.rpy': ["slacker_masturbation_help_menu"],
			'slacker_shower.rpy': [],
			'slacker_summons.rpy': [],
		}
	},
	'Locations': {
		'Home': {
			'Backyard': {
				'backyard.rpy': ["lawnchair_interact_menu"],
				'pool_events.rpy': ["pool_interact_menu"],
			},
			'Basement': {
				'basement.rpy': ["basement_boxes_interact_menu"],
				'laundry_events.rpy': [],
			},
			'Bathroom': {
				'mirror_events.rpy': [],
				'shower_events.rpy': [],
				'upstairs_bathroom.rpy': [],
			},
			'Cheerleader_Bedroom': {
				'cheerleader_bed_events.rpy': [],
				'cheerleader_bedroom.rpy': [],
			},
			'Firebrand_Bedroom': {
				'firebrand_bed_events.rpy': [],
				'firebrand_bedroom.rpy': [],
				'firebrand_bedroom_peek_events.rpy': [],
				'firebrand_computer_events.rpy': [],
			},
			'Hallway': {
				'door_interact_events.rpy': [],
				'upstairs_hall.rpy': [],
			},
			'Jock_Bedroom': {
				'jock_bed_events.rpy': [],
				'jock_bedroom.rpy': [],
			},
			'Kitchen': {
				'dinner_events.rpy': [],
				'dishes_events.rpy': [],
				'kitchen.rpy': [],
			},
			'Livingroom': {
				'church_events.rpy': [],
				'couch_events.rpy': ["couch_interact_menu"],
				'livingroom.rpy': [],
				'mall_events.rpy': ["misc_shopping_loop", "pharmacy_menu", "lingerie_shop_menu"],
				'travel_events.rpy': ["front_door_interact_menu"],
				'tv_events.rpy': [],
				'yoga_events.rpy': [],
			},
			'Mom_Bedroom': {
				'mom_bed_events.rpy': [],
				'mom_bedroom.rpy': [],
				'mom_bedroom_masturbate_events.rpy': [],
				'mom_closet_events.rpy': ["closet_interact_menu", "mom_model_menu", "dresser_interact_menu"],
				'mom_sewing_events.rpy': ["sewing_machine_menu"],
				'mom_study_events.rpy': ["study_interact_menu"],
			},
			'Nerd_Bedroom': {
				'nerd_bedroom.rpy': [],
				'nerd_tidy_events.rpy': [],
			},
			'Slacker_Bedroom': {
				'slacker_bedroom.rpy': [],
				'slacker_tidy_events.rpy': [],
			}
		},
		'School': {
			'BoysBathroom': {
				'boys_bathroom.rpy': [],
			},
			'BoysChangingroom': {
				'boys_changing_room.rpy': [],
			},
			'Classroom': {
				'classroom.rpy': ["class_select_menu"],
				'classroom_tease_events.rpy': [],
				'detention_events.rpy': [],
				'english_class_events.rpy': [],
			},
			'GirlsBathroom': {
				'girls_bathroom.rpy': [],
			},
			'GirlsChangingroom': {
				'girls_changing_room.rpy': [],
			},
			'Gym': {
				'gym.rpy': [],
				'gym_class_events.rpy': [],
			},
			'PrincipalOffice': {
				'principal_office.rpy': [],
			},
			'SchoolGloryhole': {
				'school_gloryhole.rpy': [],
			},
			'SchoolHall1': {
				'schoolhall1.rpy': [],
			},
			'SchoolHall2': {
				'schoolhall2.rpy': [],
			},
		},
	},
	'Mods' : {
		'example_mod.rpy' : []
	}
}