#!/usr/bin/env python3
""" an async routine called task_wait_n that takes in 2 int arguments
(in this order): n and max_delay. You will spawn task_wait_random n times
with the specified max_delay"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """return the list of all the delays (float values). The list of the
    delays should be in ascending order without using sort() because
    of concurrency."""
    my_list = []
    for i in range(n):
        my_list.append(task_wait_random(max_delay))
    sor = await asyncio.gather(*my_list)
    return sorted(sor)
