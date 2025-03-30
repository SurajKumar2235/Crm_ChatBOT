
- submission\_messagestring, mandatory if the value of **submission\_action\_type** is **display\_message**



The message to be displayed once the user clicks the unsubscribe button. You can specify the message either in rich text (html) or plain text format.


#### Sample Input

``` json
Copied{
  "unsubscribe_links": [\
    {\
      "name": "Test",\
      "page_type": "standard",\
      "standard_page_message": " You will not be sent any more newsletter once you click the unsubscribe button. Do you wish to continue?",\
      "submission_action_type": "redirect",\
      "submission_redirect_url": "https://redirecturl.com"\
    }\
  ]
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required OAUTH SCOPE. Generate a new token with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 400



You have specified an invalid value for the URL fields.

**Resolution:** Specify a valid URL.

- LIMIT\_EXCEEDEDHTTP 400



Unsubscribe Link limit exceededd

**Resolution:** You have already set up the maximum allowed number of unsubscribe links in your account. Please delete one or more links to create additional ones. For more information on edition-wise limits, refer [here](https://www.zoho.com/crm/help/complete-feature-list.html).

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** You have not specified one or more of the mandatory keys in the input body. Specify all the mandatory keys. Refer to the **Input JSON keys** sections to know more.

- DUPLICATE\_DATAHTTP 400



Unsubscribe Link name already exists

**Resolution:** Specify another unique name for the unsubscribe link.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Required field not found

**Resolution:** You have not specified one of the dependent fields. Please specify all the dependent fields. Refer to the input JSON keys section above to know about the dependent fields.


#### Sample Response

``` json
Copied{
    "unsubscribe_links": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2309216000000582123"\
            },\
            "message": "Unsubscribe Link created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-unsubscribe-link.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)