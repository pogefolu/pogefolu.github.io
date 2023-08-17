const MENU_SEPARATOR = '-----'

// Emotions - "" is the 'inherit' value, i.e. current emotion.
const EMOTION = ["", "angry", "aroused", "confused", "embarrassed", "happy", "mischevious", "neutral", "sad", "surprised"]

// Outfits
const OUTFITS = ["accessory", "bra", "panties", "pants", "shirt", "shoes", "socks"]

// Phone Backgrounds
const PHONE_BACKGROUNDS = [
    'default_background', 'beach_background', 'firebrand_gym_background', 'yark_pose_background',
    'yark_fuck_background', 'yark_throatfuck_background', 'matriarch_flying_background',
    'elf_twerk_background', 'butt_jiggle_background', 'mom_workout_background', 'mom_workout_pervy_background',
    'firebrand_boob_peek_background', 'mom_changing_blurry', 'mom_changing_zoomed', 'mom_changing_full',
    'mom_easter_bunny', 'firebrand_backyard_tan_background', 'swim_shortstack_tease'
]

const EVENT_TAGS = {
    'Home': {
        'Jock': [
            "jock_titjob_enabled", "jock_titjob_done", MENU_SEPARATOR,
            "jock_pose_intro", "jock_massage_unlocked", "jock_condom_flick", MENU_SEPARATOR,
            "jock_masturbation_help_intro", "jock_masturbation_help_enabled", MENU_SEPARATOR,
            "jock_blowjob_enabled", "jock_blowjob_done"
        ],
        'Nerd': [
            "nerd_masturbation_help_intro", "nerd_masturbation_help_enabled", MENU_SEPARATOR,
            "nerd_blowjob_enabled", "nerd_blowjob_done", MENU_SEPARATOR,
            "nerd_titjob_enabled", "nerd_titjob_done"
        ],
        'Slacker': [
            "slacker_masturbation_help_intro", MENU_SEPARATOR,
            "slacker_blowjob_done", "slacker_blowjob_enabled", MENU_SEPARATOR,
            "slacker_titjob_enabled", "slacker_titjob_done"
        ],
        'Mom': [
            "workout_intro_convo", "nightstand_condom_found", MENU_SEPARATOR,
            "sewing_search_started", "cutdown_underwear_finished", "cutdown_underwear_unlocked", "minified_work_outfit_unlocked", MENU_SEPARATOR,
            "mmo_introduced_phase_1", "mmo_introduced", "mmo_intro_3"
        ],
    },
    'School': [
        "gloryhole_sign_deployed", "first_investigation_complete", MENU_SEPARATOR,
        "principal_first_day_introduction_complete", "revealing_work_interrogation_first_time", "has_school_handbook",
        "very_revealing_work_interrogation_first_time", MENU_SEPARATOR,
        "slutty_magazine_found", "busty_revealing_outfit_talk"
    ]
}

// Locations
const LOCATIONS = {
    "Home": [
        "backyard", "basement", "upstairs_bathroom", "cheerleader_bedroom", "firebrand_bedroom",
        "jock_bedroom", "kitchen", "livingroom", "mom_bedroom", "nerd_bedroom",
        "upstairs_hallway", "slacker_bedroom"
    ],

    "School": [
        "boys_bathroom", "boys_changingroom", "history_classroom", "girls_bathroom", "girls_changingroom",
        "gym", "principal_office", "girls_gloryhole", "school_hall_1", "school_hall_2"
    ],

    "Other": ["caves_of_grothnar", "church", "grocery", "mall", "pharmacy"]
}

// Chores
const CHORES = {
    "Normal": ["work_chore", "mark_homework_chore", "dinner_chore", "grocery_chore", "weed_garden",
        "skim_pool", "clean_bathroom_chore", "church_chore", "cheerleader_tidy_chore", "firebrand_tidy_chore",
        "jock_tidy_chore", "slacker_tidy_chore", "nerd_tidy_chore", "laundry_chore", "cheer_homework_chore"
    ],
    "Sex": ["nerd_masturbate_chore", "jock_masturbate_chore", "slacker_masturbate_chore"]
}

const CHORE_TAGS = {
    "Normal": ["gen_work", "mark_homework", "gen_dinner", "grocery_shopping", "weed_garden",
        "skim_pool", "clean_bathroom", "go_church", "cheer_tidy", "firebrand_tidy",
        "jock_tidy", "slacker_tidy", "nerd_tidy", "do_laundry", "cheer_homework"
    ],
    "Sex": ["_nerd_climaxed", "_jock_climaxed", "_slacker_climaxed"]
}

// Sex Records
const SEX_RECORDS = [
    'had_climax', 'masturbated', 'mutual_masturbation', 'gave_handjob',
    'gave_blowjob', 'gave_titfuck', 'groped_person', 'fingered_person',
    'makeout_session'
]

// Outfit Tags
const OUTFIT_TAGS = [
    'Inside', 'Casual', 'Work', 'Swimwear', 'MMO', 'Workout',
    'Underwear', 'Revealing Underwear', 'Very Revealing Underwear',
    'Revealing', 'Very Revealing', "Pushup Bra"
]

// DEFINITIONS
// Characters -- Home / FEMALE
const MOM = {
    'name': 'mom',
    'gender': 'female',

    'stats': ["arousal", "corruption_level", "stress", "arousal_scaled"],

    'requirements': ["corruption_requirement", "arousal_requirement", "arousal_max",
        "stress_requirement"
    ],

    'clickable': [],

    'outfit': ["just_towel", "normal_underwear", "cutdown_underwear", "pushup_underwear", "nude",
        "normal_clothes", "cutdown_normal_clothes", "minified_normal_clothes",
        "teacher_outfit", "cutdown_teacher_outfit", "minified_teacher_outfit",
        "bikini", "onepiece", "cutdown_onepiece",
        "healer_robes_level_1", "healer_robes_level_2",
        "workout_clothes", "cutdown_workout_clothes"
    ],

    'frames': ["butt_frame", "boob_frame", "cock_frame", "handjob_frame",
        "blowjob_frame", "upskirt_frame", "masturbation_frame", "titfuck_frame",
        "titjob_frame", "front_titfuck_frame"
    ],

    'animations': {
        "Body": [
            "boob_bounce_left_animation", "boob_bounce_right_animation"
        ],
        "Cock": ["apply_condom_animation"],
        "Boobs": [
            "boobs_bounce",
            "boob_slap_animation",
            "boob_sway_animation", "boob_bounce_vertical_animation"
        ],
        "Butt": [
            "butt_bounce",
            "butt_bounce_1_animation", "butt_bounce_2_animation",
            "butt_shake_animation", "butt_bounce_animation"
        ],
        "Handjob": [
            "handjob_stroke_animation", "handjob_climax_animation", "handjob_condom_break_animation",
            "gentle_handjob_animation", "gentle_handjob_animation", "fast_handjob_animation"
        ],
        "Blowjob": [
            "blowjob_start_animation", "blowjob_end_animation",
            "blowjob_kiss", "blowjob_slow_animation", "blowjob_medium_animation",
            "blowjob_single_stroke", "blowjob_single_kiss",
            "blowjob_condom_on_animation", "blowjob_condom_mouth_on_animation"
        ],
        "Masturbation": [
            "masturbation_single_pussy_stroke", "masturbation_slow_pussy_stroke", "masturbation_fast_pussy_stroke",
            "masturbation_orgasm_twitch"
        ],
        "Upskirt": [
            "upskirt_bounce_1", "mechanical_buzz_1"
        ],
        "Titfuck": [
            "titfuck_single_stroke", "titfuck_slow", "titfuck_normal", "titfuck_fast", "titfuck_climax"
        ],
        "Front Titfuck": [
            "straight_titfuck_single_stroke", "straight_titfuck_slow", "straight_titfuck_normal", "straight_titfuck_fast", "straight_titfuck_climax"
        ],
        "Titjob": [
            "titjob_single_stroke", "titjob_slow", "titjob_normal", "titjob_fast", "titjob_climax"
        ]
    },

    'corruption_points': [
        "corruption_start", "washing_machine_masturbation", "mom_masturbation", "kids_masturbation_imagination",
        "jock_control_makeout", "jock_masturbation_help_trade", "jock_caught_masturbating_1", "jock_handjob", "jock_footrub",
        "nerd_tease_trade_tits", "nerd_masturbation_help_trade", "nerd_caught_masturbating_1", "nerd_handjob",
        "slacker_bra_show_bribe", "slacker_masturbation_help_trade", "slacker_caught_masturbating_1", "slacker_handjob", "gloryhole_handjob",
        "first_blowjob", "first_cock_kiss", "first_deepthroat", "first_titfuck",
        "class_tease_1", "class_tease_2", "gym_flash_tits",
        "revealing_work_outfit", "cutdown_normal_outfit", "cutdown_office_outfit",
        "shared_shower", "table_handjob", "dishes_splash",
        "watched_while_masturbating", "mutual_masturbation", "massage_orgasm",
        "gloryhole_peek", "gloryhole_masturbation"
    ],
}

const CHEERLEADER = {
    'name': 'cheerleader',
    'gender': 'female',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["cheerleader_hallway_location", "cheerleader_dishes_position", "kitchen_cheerleader_default", "cheerleader_in_bedroom",
        "bathroom_cheerleader_shower_position", "backyard_cheerleader_play_position"
    ],

    'outfit': ["cheerleader_base_outfit", "cheerleader_base_underwear"],

    'frames': [],

    'animations': {
        "Body": [
            "cheerleader_boob_bounce_loop_animation",
            "cheerleader_boob_bounce_left_animation", "cheerleader_boob_bounce_right_animation"
        ]
    },

    'corruption_points': [
        "topless_homework", "revealing_outfit",
        "shared_shower", "pussy_touched",
        "wears_very_revealing_outfit", "wears_revealing_outfit", "wears_revealing_underwear",
        "shirtless_brother", "brother_cock_bulge"
    ]
}

const FIREBRAND = {
    'name': 'firebrand',
    'gender': 'female',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["livingroom_firebrand_leaving", "livingroom_firebrand_position", "firebrand_in_bedroom", "firebrand_off_map",
        "bathroom_firebrand_shower_position", "firebrand_laundry_basement", "firebrand_lounging_face_up",
        "firebrand_lounging_face_down", "firebrand_lounging_face_up_topless", "firebrand_lounging_face_down_topless"
    ],

    'outfit': ["firebrand_bikini"],

    'frames': [],

    'animations': {
        "Body": [
            "firebrand_boob_bounce_left_animation", "firebrand_boob_bounce_right_animation"
        ]
    },

    'corruption_points': ["revealing_outfit", "party_storm_out", "mom_panties_walkin", "topless_backyard_tan"]
}

// Characters -- Home / MALE
const SLACKER = {
    'name': 'slacker',
    'gender': 'male',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["slacker_in_bedroom", "slacker_bedroom_watching_movie", "livingroom_slacker_summon_position",
        "bathroom_slacker_shower_position", "slacker_laundry_basement", "backyard_slacker_summon_position"
    ],

    'outfit': [],

    'frames': ["cock_frame", "masturbation_frame"],

    'animations': {
        "Body": ["panties_masturbation_animation"],
        "Cock": [
            "dick_twitch_animation", "climax_twitch_animation",
            "apply_condom_animation",
        ],
        "Handjob": [
            "masturbation_stroke_animation", "gentle_masturbation_animation",
            "normal_masturbation_animation", "fast_masturbation_animation"
        ]
    },

    'corruption_points': [
        "shower_walkin", "cum_laundry", "slacker_mom_bedroom_tease", "masturbation_walkin", "mom_laundry_underwear",
        "movie_tease", "revealing_outfit", "caught_masturbating_1", "pose_strip_bare_tits", "pose_strip_bare_ass",
        "handjob_masturbation", "first_blowjob", "first_cock_kiss", "first_titfuck", "mutual_masturbation"
    ]
}

const JOCK = {
    'name': 'jock',
    'gender': 'male',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["jock_hallway_location", "livingroom_jock", "jock_dishes_position", "jock_in_bedroom",
        "bathroom_jock_shower_position", "backyard_jock_summon_position"
    ],

    'outfit': [],

    'frames': ["cock_frame", "masturbation_frame"],

    'animations': {
        "Body": ["panties_masturbation_animation"],
        "Cock": [
            "dick_twitch_animation", "climax_twitch_animation",
            "apply_condom_animation",
        ],
        "Handjob": [
            "masturbation_stroke_animation", "gentle_masturbation_animation",
            "normal_masturbation_animation", "fast_masturbation_animation"
        ]
    },

    'corruption_points': [
        "revealing_outfit", "caught_masturbating_1", "pose_strip_bare_tits", "pose_strip_bare_ass",
        "handjob_masturbation", "first_blowjob", "first_cock_kiss", "first_titfuck", "bathroom_cock_admire", "dishes_splash",
        "footrub", "legrub", "buttrub", "massage_orgasm", "jock_mom_yoga_tease", "sister_revealing_underwear"
    ]
}

const NERD = {
    'name': 'nerd',
    'gender': 'male',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["nerd_school_bathroom_location", "nerd_in_bedroom", "livingroom_nerd_summon_position",
        "nerd_dishes_position", "nerd_in_cheer_bedroom", "bathroom_nerd_summon_position", "bathroom_nerd_shower_position",
        "backyard_nerd_summon_position"
    ],

    'outfit': [],

    'frames': ["cock_frame", "masturbation_frame"],

    'animations': {
        "Body": ["panties_masturbation_animation"],
        "Cock": [
            "dick_twitch_animation", "climax_twitch_animation",
            "apply_condom_animation",
        ],
        "Handjob": [
            "masturbation_stroke_animation", "gentle_masturbation_animation",
            "normal_masturbation_animation", "fast_masturbation_animation"
        ]
    },

    'corruption_points': [
        "revealing_outfit", "tease_trade_tits", "mom_butt_grope", "caught_masturbating_1", "pose_strip_bare_tits", "pose_strip_bare_ass", "shared_shower",
        "handjob_masturbation", "first_blowjob", "first_cock_kiss", "first_titfuck", "table_handjob", "dishes_splash", "masturbation_watched",
        "mirror_peek_tease", "nerd_mom_bedroom_tease", "bedtime_handjob", "backyard_tan_peek", "backyard_tan_peek_topless"
    ]
}

// Characters -- School / FEMALE
const BUSTY = {
    'name': 'busty',
    'gender': 'female',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["busty_hall_location", "busty_gym_class_location", "classroom_busty_location"],

    'outfit': [],

    'frames': [],

    'animations': {},

    'corruption_points': ["revealing_outfit_talk", "jiggly_gym_class", "nude_workout", "classroom_boob_bully", "busty_bully_support", "school_work_cheating"]
}


const GOTH = {
    'name': 'busty',
    'gender': 'female',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["goth_bathroom_interact", "goth_gym_class_location", "goth_classroom_interact"],

    'outfit': [],

    'frames': [],

    'animations': {},

    'corruption_points': []
}

// Characters -- School / MALE
const PRINCIPAL = {
    'name': 'principal',
    'gender': 'male',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["principal_in_office_location"],

    'outfit': [],

    'frames': ["cock_frame", "masturbation_frame"],

    'animations': {
        "Body": ["panties_masturbation_animation"],
        "Cock": [
            "dick_twitch_animation", "climax_twitch_animation",
            "apply_condom_animation",
        ],
        "Handjob": [
            "masturbation_stroke_animation", "gentle_masturbation_animation",
            "normal_masturbation_animation", "fast_masturbation_animation"
        ]
    },

    'corruption_points': ["office_boob_tease", "revealing_outfit", "office_flirt", "control_tease", "revealing_outfit_distraction", "allowed_rules_exception"]
}

const STUDENT = {
    'name': 'student',
    'gender': 'male',

    'stats': ["arousal", "control", "corruption_level", "arousal_scaled", "control_scaled"],

    'requirements': ["npc_control_requirement", "npc_arousal_requirement",
        "npc_money_requirement", "npc_corruption_requirement"
    ],

    'clickable': ["bully_gym_class_location", "classroom_student_default_location", "classroom_student_english_location"],

    'outfit': [],

    'frames': ["cock_frame", "masturbation_frame"],

    'animations': {
        "Body": ["panties_masturbation_animation"],
        "Cock": [
            "dick_twitch_animation", "climax_twitch_animation",
            "apply_condom_animation",
        ],
        "Masturbation": [
            "masturbation_stroke_animation", "gentle_masturbation_animation",
            "normal_masturbation_animation", "fast_masturbation_animation"
        ]
    },

    'corruption_points': [
        "classroom_boob_tease", "class_tease_2", "control_boob_tease", "busty_bully_support", "teacher_revealing_upskirt",
        "gloryhole_encounter", "gloryhole_handjob",
        "gym_tits_tease", "gym_flash_tits"
    ]
}


// Alphabetic Order
const CHARACTERS = {
    'busty': BUSTY,
    'cheerleader': CHEERLEADER,
    'firebrand': FIREBRAND,
    'goth': GOTH,
    'jock': JOCK,
    'mom': MOM,
    'nerd': NERD,
    'principal': PRINCIPAL,
    'slacker': SLACKER,
    'student': STUDENT
}