import qrcode
import sys
import time
from PIL import Image

qr = qrcode.QRCode(
    version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=50, border=2)

qr.add_data(
    "You have just scanned the Salvation Army code, and you earned 10 points!")

qr.make(fit=True)
img = qr.make_image(fill_color='green', back_color='white')
logo_display = Image.open('ecodesleaf.png')
logo_display.thumbnail((400, 400))

logo_pos = ((img.size[0] - logo_display.size[0]) // 2,
            (img.size[1] - logo_display.size[1]) // 2)
img.paste(logo_display, logo_pos)

img.save('ecodes1.png')
qr = qrcode.QRCode(
    version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=50, border=2)

qr.add_data("You have just scanned the Tentree code, and you earned 20 points!")

qr.make(fit=True)
img = qr.make_image(fill_color='green', back_color='white')
logo_display = Image.open('ecodesleaf.png')
logo_display.thumbnail((400, 400))

logo_pos = ((img.size[0] - logo_display.size[0]) // 2,
            (img.size[1] - logo_display.size[1]) // 2)
img.paste(logo_display, logo_pos)

img.save('ecodes2.png')
qr = qrcode.QRCode(
    version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=50, border=2)

qr.add_data(
    "You have just scanned the GO Transit code, and you earned 30 points!")

qr.make(fit=True)
img = qr.make_image(fill_color='green', back_color='white')
logo_display = Image.open('ecodesleaf.png')
logo_display.thumbnail((400, 400))

logo_pos = ((img.size[0] - logo_display.size[0]) // 2,
            (img.size[1] - logo_display.size[1]) // 2)
img.paste(logo_display, logo_pos)

img.save('ecodes3.png')
qr = qrcode.QRCode(
    version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=50, border=2)

qr.add_data(
    "You have just scanned the Zero-Waste Bulk code, and you earned 40 points!")

qr.make(fit=True)
img = qr.make_image(fill_color='green', back_color='white')
logo_display = Image.open('ecodesleaf.png')
logo_display.thumbnail((400, 400))

logo_pos = ((img.size[0] - logo_display.size[0]) // 2,
            (img.size[1] - logo_display.size[1]) // 2)
img.paste(logo_display, logo_pos)
img.save('ecodes4.png')
qr = qrcode.QRCode(
    version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=50, border=2)

qr.add_data(
    "You have just scanned the B.Y.O. Cup/Straw code at Starbucks, and you earned 50 points!")

qr.make(fit=True)
img = qr.make_image(fill_color='green', back_color='white')
logo_display = Image.open('ecodesleaf.png')
logo_display.thumbnail((400, 400))

logo_pos = ((img.size[0] - logo_display.size[0]) // 2,
            (img.size[1] - logo_display.size[1]) // 2)
img.paste(logo_display, logo_pos)
img.save('ecodes5.png')
