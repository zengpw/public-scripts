# -*- coding: UTF-8 -*-
import base64
import io
import os

script_path = os.path.dirname(os.path.realpath(__file__))

inputs = os.path.join(script_path, 'in')
outputs = os.path.join(script_path, 'out')

total = os.path.join(inputs, 'out.txt')
total_encode = os.path.join(outputs, 'out.txt')


def create_banlist():
    """
    Create an encode file by base64.

    Steps:
            1. Traversal the source path(the 'in' folder), encode each file and write results to the 'out' folder.
            2. Merge all files into out.txt.
            3. Encode the 'out.txt' and send the encoded file into the 'out' folder.
    :return: None
    """
    if not os.path.exists(outputs):
        os.mkdir(outputs)

    f = io.open(total, 'w')
    f.write('[AutoProxy 0.2.9]')
    f.write('\r\n')
    f.close()

    files = os.listdir(inputs)
    for k in range(0, len(files)):
        i = os.path.join(inputs, files[k])
        o = os.path.join(outputs, files[k])
        encode_file(i, o)

        if i != total:
            add_into_file(i, total)

    encode_file(total, total_encode)

    return


def add_into_file(i, o):
    """
    Merge a plain text file's content into another file.
    :param i: file path
    :param o: file path
    :return: None
    """
    f = io.open(o, 'a')

    t = io.open(i, 'r')
    data = t.readlines()
    for i in range(len(data)):
        f.write(data[i])

    t.close()

    f.write('\r\n')
    f.close()

    return


def encode_file(i, o):
    f = io.open(i, 'r')
    data = base64.encodebytes(f.read().encode('utf-8'))
    f.close()

    f = io.open(o, 'w')
    f.write(data.decode('utf-8'))
    f.close()

    return


def decode_file(i, o):
    f = io.open(i, 'r')
    decoded = base64.decodebytes(f.read().encode('utf-8')).decode('utf-8')
    f.close()

    f = io.open(o, 'w')
    f.write(decoded)
    f.close()

    return


if __name__ == '__main__':
    create_banlist()
