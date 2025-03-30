
# Download Bulk Write Result

#### Purpose

To download the result of the bulk write job as a CSV file.

#### Download URL

Use the URL present in the download\_url parameter in the response of [Get Bulk Write Job Details](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/job-details.html).

The file will be in the .zip format. Extract it to get the CSV file. The filename would be in the **modulename-filename** format. Example: Deals-bulkwrite.

The CSV file will contain the first three mapped columns from the uploaded file, and three more columns — ID, Status, and Errors.

- STATUS



This column indicates if the record is added, skipped, updated, or unprocessed.

- RECORD\_ID



This column indicates the added or updated record's ID in Zoho CRM.

- ERRORS



This column contains the error code. The format is:



- **<errorCode>-<column\_header>** for a single error. Example: MANDATORY\_NOT\_FOUND-Company
- **<errorCode>-<column\_header>:<errorCode>-<column\_header>** for multiple errors. Example: MANDATORY\_NOT\_FOUND-Company,Last\_Name:DUPLICATE\_DATA-Email

The possible errors are MANDATORY\_NOT\_FOUND, INVALID\_DATA, DUPLICATE\_DATA, NOT\_APPROVED, BLOCKED\_RECORD, CANNOT\_PROCESS, LIMIT\_EXCEEDED, and RESOURCE\_NOT\_FOUND.

#### Sample Result

![sample result](https://www.zohowebstatic.com/sites/zweb/images/crm/bulkwrite_download_result_csv.jpg)

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-write/download-result.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)