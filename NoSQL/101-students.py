#!/usr/bin/env python3
"""Python function that returns all students sorted by average score"""


def top_students(mongo_collection):
    """return a list sorted"""
    for alumno in mongo_collection.find():
        total = 0
        for score in alumno["topics"]:
            total += score["score"]
        average = total / len(alumno["topics"])
        mongo_collection.update_one({"_id": alumno["_id"]},
                                    {"$set": {"averageScore": average}})
    return mongo_collection.find().sort("averageScore", -1)
