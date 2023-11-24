#!/usr/bin/env python3
"""Python function that lists all documents in a collection"""


def list_all(mongo_collection):
    """return a list"""
    list_of_docu = [docu for docu in mongo_collection.find()]
    return list_of_docu
