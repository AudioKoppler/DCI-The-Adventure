var rooms = {
    "start": {
        "desription": "You are at the entrance to DCI! You see stairs <b>north</b>\
    and you hear the summing of an Elevators to the <b>east</b><hr>",
        "directions": {
            "north": "stairs",
            "east": "elevator",
        }
    },

    "stairs": {
        "desription": "You climb hardly climb up the stairs to the 3rd floor arriving at the <b>Campus</b>door!\
    and you hear the summing of an Elevators to the <b>west</b><hr>",
        "directions": {
            "north": "campus",
            "west": "elevator"
        }
    },
    "elevator": {
        "desription": "Luckily the elevator opens and you see a labeled buttons <b>east</b> \
    or maybe better to take the stairs in the <b>north</b><hr>",
        "directions": {
            "north": "start",
            "east": "campus",
        }
    },

    "campus": {
        "desription": "You arrived at the DCI-Campus!!! <b>north</b>\
    and you hear the summing of an Elevators to the <b>south</b><hr>",
        "directions": {
            "north": "newRoom",
            "south": "elevator",
        }
    },
    "newRoom": {
        "desription": " <b>north</b><hr>\
     <b>south</b>",
        "directions": {
            "north": "start",
            "south": "campus",
        }
    },
}