At Zoho, we do not use third-party software to track
website visitors. We take
your privacy seriously and use our own tools hosted in our data centres. Your data is yours, and we
never monetize it for advertisement purposes. You can learn more about our cookie policy [here](https://www.zoho.com/privacy/cookie-policy.html?src=cp-banner) and
change your preferences at any time.

Manage
Cookies

Accept All Cookies

Reject Unnecessary
Cookies

close

![Cookie policy - Zoho](https://www.zoho.com/sites/zweb/images/zoho_general_pages/cookie-widget.png)

#### Cookie Settings

The options below allow you to manage your consent for the cookies that are set on this website. You
can manage your preference anytime by visiting our [cookie\\
policy](https://www.zoho.com/privacy/cookie-policy.html?src=cp-popup) or by clicking on the cookie icon at the bottom-left corner of the webpage.

##### Strictly Necessary

Always Active


They are necessary for our website to function and cannot be switched off in our systems.
They are essential in order to enable you to navigate around the website and use its
features. If you remove or disable these cookies from your browser, we cannot guarantee
that you will be able to use our websites.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=sn)

##### Functional/Preference

They allow us to remember the choices made by you (such as your user name, language or
region) as well as other functionalities (such as controlling the cookie banner,
redirection to a new page) in order to provide a more personalised online experience.
These preferences are remembered (through the use of persistent cookies) so that you
need not set them again the next time you visit the page.

Note : The **live chat** widget will **not** work if the
functionality/preference setting is disabled.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=fp)

##### Analytics

They help us improve the way our websites work (e.g. by ensuring that users are finding
what they are looking for easily). These collect aggregate information about visits,
navigations in the websites so that we can make improvement and report our performance.
Analytics cookies may also be used to test new pages or features to understand how users
adopt them.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=an)

##### Third-party company cookies

When you visit some of our webpages that contain embedded content hosted on a third party
platform such as YouTube videos, these third parties set cookies on your browser. We
always opt for the most privacy friendly options provided by these parties, however
these are not controlled by us. If you do not want these parties to set cookies on your
browser on visiting our site, you should avoid visiting webpages that contain such
embeds.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=tp)

Save & Exit

# Lock Records

#### Purpose

To lock a record of a module.

#### Endpoints

[POST /{module\_API\_name}/{record\_id}/Locking\_Information\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/lock-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_id}/Locking\_Information\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.lockinginformation.Create

(and)

scope=ZohoCRM.modules.All (or) scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, tasks, cases, solutions, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices and custom

#### Possible operation types

All - Full access to the record

READ - Create records for the module

**Note**

- For custom modules, only those created by users will support record locking. Custom modules created through extensions, integrations, or other means are not supported.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/5843104000000425565/Locking_Information__s"
-X POST
-d "@lockrecord.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

##### Request JSON Keys

- Locked\_Reason\_\_s string,mandatory



Specify the reason the records are locked.


#### Sample Input

``` json
Copied{
    "data": [\
        {\
               "Locked_Reason__s": "deal in progress"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid.

**Resolution:** Specify a valid module API name.

- NOT\_ALLOWEDHTTP 403



Record is already locked.

**Resolution:** You can lock a record that is not already locked.

- INVALID\_REQUEST\_METHODHTTP 403



The http request method type is not a valid one.

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- NO\_PERMISSIONHTTP 403



Permission denied to customize record lock configurations. The user does not have permission.

**Resolution:** Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "Modified_Time": "2023-09-05T08:54:49-04:00",\
                "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5843104000000424672"\
                },\
                "Created_Time": "2023-09-05T08:54:49-04:00",\
                "id": "5843104000000804020",\
                "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "5843104000000424672"\
                }\
            },\
            "message": "record added",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/lock-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)