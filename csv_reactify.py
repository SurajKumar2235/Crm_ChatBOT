import csv
with open('api_details.csv', "r", newline="", encoding="utf-8") as infile:
    reader = csv.reader(infile)
    header = next(reader)  # Read the header
    data = []
    
    for row in reader:
        if row:  # Ensure the row is not empty
            request_type = row[0][:-1]  # Remove last character from request_type
            extra_char = row[0][-1]  # Last character
            api_name = extra_char + row[1]  # Attach last character to front of api_name
            row[0] = request_type  # Update request_type
            row[1] = api_name  # Update api_name
            data.append(row)

# Write the processed data to a new CSV file
with open('api_details_updated.csv', "w", newline="", encoding="utf-8") as outfile:
    writer = csv.writer(outfile)
    writer.writerow(header)  # Write header
    writer.writerows(data)  # Write updated data

print(f"Processed data saved to {'api_details_updated.csv'}")
