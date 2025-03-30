
# Get Rich Text Fields

[Rich Text Fields](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/types-of-fields#Rich_Text_Field) allow users to input formatted text up to **50,000 characters**, including HTML elements. It is ideal for entries requiring styling and organization, such as product descriptions or client communications.

#### Purpose

To retrieve the rich text fields of a specific record along with their contents.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/actions/fetch\_full\_data](https://www.zoho.com/crm/developer/docs/api/v7/get-rich-text-fields.html)

[GET /{module\_api\_name}/{record\_id}/actions/fetch\_full\_data?fields={rich\_text\_field\_1},{rich\_text\_field\_2},...](https://www.zoho.com/crm/developer/docs/api/v7/get-rich-text-fields.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/fetch\_full\_data

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.modules.ALL

(or)

scope = ZohoCRM.modules.{module\_name}.READ

#### Parameter

- fieldsstring, optional



Specify the API names of the rich text fields whose values you want to retrieve. If you skip this parameter, all rich text fields of the record will be retrieved.


**Notes**

- This API exclusively fetches _rich text fields_ and their _data_. Retrieval of any other field types is _not supported_.
- You can retrieve only the data from the **rich text multi-line field**. Retrieving multi-line fields with other types, such as **small** and **large**, is **not supported**.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/111112000000070427/actions/fetch_full_data"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Response JSON Keys

- idstring



It represents the ID of the record.

- {rich\_text\_field\_api\_name}string



Contains the value for the specific rich text field. Please note that this key will _differ_ depending on the API names of the rich text fields in your module.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Multi_Line_RTF1": "<span style=\"background-color:rgb(255, 255, 0)\"><b><i>Zoho CRM</i></b></span> can be easily customized to meet the specific needs of any business type and size.\
Modern CRM systems such as Zoho CRM are used by <b>start-ups, large enterprises, and verticals like real-estate, healthcare, insurance, legal, media, restaurants, travel, banking, tax, freelancers, and non-profits to increase their sales, marketing, and customer support efforts</b>.",\
\
            "Multi_Line_RTF2": "<span style=\"background-color:rgb(255, 255, 0)\"><b><i>Zoho CRM</i></b></span> can be easily customized to meet the specific needs of any business type and size.\
Modern CRM systems such as Zoho CRM are used by <b>start-ups, large enterprises, and verticals like real-estate, healthcare, insurance, legal, media, restaurants, travel, banking, tax, freelancers, and non-profits to increase their sales, marketing, and customer support efforts</b>.",\
\
            "id": "111112000000070427"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The ID of the record given seems to be invalid

**Resolution:** Specify a valid record ID.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to fetch the rich text field values. Generate a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-rich-text-fields.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)