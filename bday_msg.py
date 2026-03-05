import time
import subprocess
import datetime

# Set the target date and time (Year, Month, Day, Hour, Minute)
target_time = datetime.datetime(2026, 3, 8, 0, 0)
# target_time = datetime.datetime(2026, 3, 5, 16, 23)

# Put her actual phone number here (with country code, e.g., "+12345678900")
# phone_number = "+17808506082" 
phone_number = "+14169095115" 
message = "Happy Birthday! For you: https://mechha1002.github.io/2026_hbd/"

def schedule_imessage():
    now = datetime.datetime.now()
    delay = (target_time - now).total_seconds()

    if delay > 0:
        print(f"Waiting {delay} seconds until {target_time}...")
        time.sleep(delay)
        
        # AppleScript command to send the iMessage silently
        apple_script = f'tell application "Messages" to send "{message}" to buddy "{phone_number}"'
        subprocess.run(["osascript", "-e", apple_script])
        print("Message sent successfully!")
    else:
        print("The target time has already passed.")

if __name__ == "__main__":
    schedule_imessage()