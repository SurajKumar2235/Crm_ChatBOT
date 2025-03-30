


Invalid file type

**Resolution:** The file being uploaded is not an image file. Ensure that the file you are trying to upload is an image file.

- INVALID\_DATAHTTP 400



The request does not contain any file

**Resolution:** You have not added any file to the request. Ensure that you add an image file to the request. Refer to parameters section above.

- INVALID\_DATAHTTP 400



The request contains more than one file

**Resolution:** You have added more than one file to the request. Ensure that you add only one image file to the request. Refer to parameters section above.

- FILE\_SIZE\_MORE\_THAN\_ALLOWED\_SIZEHTTP 415



Please check if the file size is in the correct range

**Resolution:** The photo you are trying to upload either exceeds the allowed size(1 MB) or the allowed resolution(10 MP). Ensure that the photo being uploaded is within the prescribed range.

- CANNOT\_PROCESSHTTP 400



Zia vision rejected the photo

**Resolution:** The image could not be uploaded since it was rejected by Zia Image validator. Try uploading another image.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.org.CREATE/ZohoCRM.org.WRITE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update

**Resolution:** The user does not have permission to upload organization photo. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to add organization photo.

**Resolution:** The user does not have the permission to add organization photo. Contact your system administrator.


#### Sample Response

``` json
Copied{
	"message": "photo uploaded successfully",
	"details": {},
	"status": "success",
	"code": "SUCCESS",
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/upload-org-img.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)