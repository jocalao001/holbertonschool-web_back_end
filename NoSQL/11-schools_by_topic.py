#!/usr/bin/env python3
"""Python function that returns the list of school having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """return schools by topic"""
    schools = [school for school in mongo_collection.find({"topics": topic})]
    return schools
