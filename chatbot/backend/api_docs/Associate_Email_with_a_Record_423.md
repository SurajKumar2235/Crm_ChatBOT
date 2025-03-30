
# Associate Email with a Record

Zoho CRM allows its users to associate emails with record entities. You can also associate an email entry with a record, and map another record to the same. For example, if you are associating an email to a Deal, you might also need to map a contact with it. This is facilitated using the associate email API.

#### Purpose

To associate an email with a record entity.

#### Endpoints

[POST/{module}/{entity\_id}/actions/associate\_email](https://www.zoho.com/crm/developer/docs/api/v7/associate-email.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module}/{record\_id}/actions/associate\_email

#### Supported modules

Leads, Contacts, Quotes, Invoices, Sales\_Orders, Purchase\_Orders, Deals, Accounts and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.emails.ALL

(AND)

scope=ZohoCRM.modules.{module}.ALL

#### Possible modules

Leads, Contacts, Quotes, Invoices, Sales\_Orders, Purchase\_Orders, Deals, Accounts and Custom

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/4876876000000333267/actions/associate_email"
-X POST
-d "assoc-email.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- fromJSON object, mandatory



Represents the from user of the associated email. The array consists of **user\_name** and **email**.

- toJSON array, mandatory



Represents the user to whom the associated email is addressed to. The array consists of **user\_name** and **email**.

- ccJSON array, optional



Represents the users to whom the associated email is addressed in cc. The array consists of **user\_name** and **email**.

- bccJSON array, optional



Represents the users to whom the associated email is addressed in bcc. The array consists of **user\_name** and **email**.

- subjectstring, mandatory



Represents the email subject.

- contentstring, mandatory



Represents the email content.

- mail\_formatstring, optional



Represents format of the associated email. Possible value is **html**.

- attachmentsJSON array, optional



Represents the attachments in the associated email. The array consists of **id** and **file\_name**. The id represents the file id after uploading the file to ZFS. Please refer to [Upload Files](https://www.zoho.com/crm/developer/docs/api/v7/crm/developer/docs/api/v6/upload-files-to-zfs.html) documentation for more details. Please not that the size limit on attachment file(s) is 10MB.

- date\_timeDateTime, mandatory



The date and time at which the email was sent.

- sentboolean, mandatory



Represents whether the email was sent or received. If the value is _true_, the email is sent, and if the value is _false_, the email is a received email.

- linked\_recordJSON object, optional



Represents the entity details to which you want to map the email additionally. The array contains the **id** and **name** of the entity, and the module details.

- original\_message\_idstring, mandatory



Represents the unique message ID from the email header.


#### Sample Input

``` json
Copied{
  "Emails": [\
    {\
      "from": {\
        "user_name": "user1",\
        "email": "test@zoho.com"\
      },\
      "to": [\
        {\
          "user_name": "user2",\
          "email": "test1@zoho.com"\
        }\
      ],\
      "cc": [\
        {\
          "user_name": "user3",\
          "email": "test2@zoho.com"\
        }\
      ],\
      "bcc": [\
        {\
          "user_name": "user4",\
          "email": "test3@zoho.com"\
        }\
      ],\
      "subject": "Mail subject",\
       "content": "<h3><span style=\"background-color: rgb(254, 255, 102)\">Mail is of rich text format</span></h3><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>",\
      "mail_format": "html",\
      "date_time": "2018-06-12T12:12:12+05:30",\
      "sent": true,\
       "attachments": [\
        {\
          "id": "39c17f1033cd120e62f8104c545af0ef95a1bd5438fe9159ee8ff6d1bee480cd",\
          "name": "Test File"\
        }\
      ],\
       "linked_record": {\
         "id" : "4876876000001355087",\
         "name" : "Simmons Truhlar",\
         "module": {\
          "api_name": "Contacts",\
          "id": "4876876000000002179"\
         }\
    },\
      "original_message_id": "1234534dead-asds3322w243"\
    }\
  ]
}
```

### Request format for content with inline image

If you want the associated email content to include an inline image, you should [upload the image to ZFS](https://www.zoho.com/crm/developer/docs/api/v7/crm/developer/docs/api/v6/upload-files-to-zfs.html) with the parameter **type=inline**. The file id from the response should be used in the **content** section of the input body. For more details, kindly check the _Sample Input_ section.

#### Sample Input for content with Inline Image

``` json
Copied{
  "Emails": [\
    {\
      "from": {\
        "user_name": "user1",\
        "email": "test@zoho.com"\
      },\
      "to": [\
        {\
          "user_name": "user2",\
          "email": "test1@zoho.com"\
        }\
      ],\
      "cc": [\
        {\
          "user_name": "user3",\
          "email": "test2@zoho.com"\
        }\
      ],\
      "bcc": [\
        {\
          "user_name": "user4",\
          "email": "test3@zoho.com"\
        }\
      ],\
      "subject": "Inline Image Content",\
       "content": "<br><br><br><br>Hi Inline image<br><br><h3><span style=\"background-color: rgb(254, 255, 102)\"><img class=\"ZCrmImage\" src=\"crm\/img_id:39c17f1033cd120e62f8104c545af0ef3933f668cfda215fbe50a2cc5226de1d\"></span></h3><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>",\
      "mail_format": "html",\
      "date_time": "2018-06-12T12:12:12+05:30",\
      "sent": true,\
      "original_message_id": "1234523asad-asds23324374"\
    }\
  ]
}
```

Show full

Show less

### Request format for users with admin role to associate other user's mail

An admin user can associate other user's email with any record. Please note that only users with admin privilege can associate another user's email with a record. You need to give an extra input key to represent the owner of the email.

#### Input JSON Keys

- ownerJSON object, mandatory if associating other user's email.



Represents the owner of the email.


#### Sample Input for admin user to associate other user's mail

``` json
Copied{
  "Emails": [\
    {\
      "from": {\
        "user_name": "user1",\
        "email": "test@zoho.com"\
      },\
      "to": [\
        {\
          "user_name": "user2",\
          "email": "test1@zoho.com"\
        }\
      ],\
      "cc": [\
        {\
          "user_name": "user3",\
          "email": "test2@zoho.com"\
        }\
      ],\
      "bcc": [\
        {\
          "user_name": "user4",\
          "email": "test3@zoho.com"\
        }\
      ],\
      "owner" : {\
          "id" : "4876876000001360001"\
      },\
      "subject": "Other User email",\
      "content": "<h3><span style=\"background-color: rgb(254, 255, 102)\">Mail is of rich text format</span></h3><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>",\
      "mail_format": "html",\
      "date_time": "2018-06-12T12:12:12+05:30",\
      "sent": false,\
       "attachments": [\
        {\
          "id": "39c17f1033cd120e62f8104c545af0ef95a1bd5438fe9159ee8ff6d1bee480cd",\
          "name": "Test File"\
        }\
      ],\
      "original_message_id": "1234534frad-aers2332w243"\
    }\
  ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Only Admin Role/Profile Users will have permission

**Resolution:** The user does not have permission to associate emails with records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- FILE\_SIZE\_EXCEEDSHTTP 400



Total file(s) size should not exceed 10MB

**Resolution:** Limit the total attachment file size to 10MB.

- DUPLICATE\_DATAHTTP 400



duplicate data

**Resolution:** The message id you have specified is already associated with the record. Specify another valid message id for original\_message\_id key.

- INVALID\_DATAHTTP 400



provided file id is improper

**Resolution:** Specify a valid attachment id.

- INVALID\_DATAHTTP 400



Provide a Proper owner id

**Resolution:** You have specified an invalid owner ID. Provide a valid owner ID.

- INVALID\_DATAHTTP 400



the parent entity id given seems to be invalid

**Resolution:** You have specified an invalid record ID for the linked record. Provide a valid record ID.

- INVALID\_DATAHTTP 400



the api\_name given seems to be invalid

**Resolution:** Specify a valid and supported module api name in the linked\_records key.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** You have not specified one or more of the mandatory keys in the input JSON. Please refer to the _Input JSON Keys_ section above, and specify all mandatory keys.

- INVALID\_MODULEHTTP 400



permission denied to access the api

**Resolution:** You have tried to associate the email with an unsupported module. Check the _Supported modules_ section above to know which all modules are supported, and associate the email with a supported module entity.

- STORAGE\_ SPACE\_EXCEEDSHTTP 400



storage space exceeds

**Resolution:** You have exceeded the storage space of your Zoho CRM Org. Please contact your administrator.


#### Sample Response

``` json
Copied{
    "Emails": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "message_id": "39c17f1033cd120e62f8104c545af0ef3bf9a4d702dd9c006bc737afa46d6975"\
            },\
            "message": "Your mail has been added successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/associate-email.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)