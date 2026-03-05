import qrcode

# The URL you want the QR code to link to
url = "https://mechha1002.github.io/2026_hbd/"

# Configure the QR code's appearance and error correction
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # High error correction (good if you want to put a logo in the middle later)
    box_size=10,  # Size of each 'pixel'
    border=4,     # Thickness of the white border
)

qr.add_data(url)
qr.make(fit=True)

# Create the image. 
# We're using the accent color from your website's CSS (#ff4d6d) for a romantic touch!
# img = qr.make_image(fill_color="#ff4d6d", back_color="white")
img = qr.make_image(fill_color="#000000", back_color="white")

# Save the image to your current folder
output_filename = "birthday_qr.png"
img.save(output_filename)

print(f"✅ Success! QR code saved as '{output_filename}'")
