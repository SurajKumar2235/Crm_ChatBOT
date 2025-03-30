
# Download Mail Merge

#### Purpose

Use the download mail merge API to download the merged document created using your mail merge template.

#### Endpoints

[POST /{module\_API\_name}/{record\_id}/actions/download\_mail\_merge](https://www.zoho.com/crm/developer/docs/api/v7/download-mail-merge.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/actions/download\_mail\_merge

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.mailmerge.CREATE,ZohoWriter.documentEditor.ALL,ZohoWriter.merge.ALL

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000003128089/actions/download_mail_merge"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

In the request, "@input.json" contains the sample input data.

##### Input JSON

- mail\_merge\_templateJSON object, mandatory

  - name string, mandatory



    The name of the mail merge template you want to use.
- output\_formatstring, optional



The format you want for the document. This can be pdf , html or docx. The default format will be pdf.

- file\_namestring, optional



The file name you want for the document. Default value will be "download". Maximum size for file\_name is 255 characters.

- passwordstring, optional



The password for the document. This is applicable when the output format is pdf.


**Note**

- This api can support merge processing time upto 1 minute.
- This api consumes 5 credits. Incase of failure, it consumes 1 credit

#### Sample Input

``` json
Copied{
  "download_mail_merge": [\
    {\
      "mail_merge_template": {\
        "name": "mailmergename"\
      },\
      "output_format": "pdf",\
      "file_name": "testdocument",\
      "password": "tester"\
    }\
  ]
}
```

#### Possible Errors

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified the name in the "mail\_merge\_template" key.

**Resolution:** You must specify the name of the mail merge template in the "mail\_merge\_template" key.

- INVALID\_DATAHTTP 400



- You have specified an incorrect name of the mail merge template.
- You have provided an invalid output format.
- You have provided a file\_name that is more than 255 characters in length.

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input and correct it.

- INVALID\_DATAHTTP 400



You have specified an incorrect record ID in the URL.

**Resolution:** Provide the right record ID in the URL. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record ID.

- .

INVALID\_MODULEHTTP 400



The module name is invalid.

**Resolution:** Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the API name of the module.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified one or more mandatory keys in the request.

**Resolution:** Refer to the Input JSON section for the list of mandatory keys.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP request method is invalid.

**Resolution:** The HTTP request method for this API is POST.

- INTERNAL\_ERRORHTTP 500



Unhandled exception in server.

**Resolution:** Contact the support team at support@zohocrm.com.

- DEPENDENT\_SERVICE\_ERRORHTTP 400



Document processing time is more than 1 minute.

**Resolution:** You can make changes in your template like compressing images which will reduce the file size thus making the processing time shorter.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/download-mail-merge.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)