# -*- coding: UTF-8 -*-
import os

import create_banlist as banlist


def revert():
    if not os.path.exists(banlist.inputs):
        os.mkdir(banlist.inputs)

    files = os.listdir(banlist.outputs)
    for k in range(0, len(files)):
        i = os.path.join(banlist.inputs, files[k])
        o = os.path.join(banlist.outputs, files[k])
        banlist.decode_file(o, i)

    return


if __name__ == '__main__':
    revert()
