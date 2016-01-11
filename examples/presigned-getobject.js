/*
 * Minio Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2015 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 // Note: YOUR-ACCESSKEYID, YOUR-SECRETACCESSKEY, my-bucketname and my-objectname
 // are dummy values, please replace them with original values.

var Minio = require('minio')

var s3Client = new Minio({
  endPoint: 's3.amazonaws.com',
  accessKey: 'YOUR-ACCESSKEYID',
  secretKey: 'YOUR-SECRETACCESSKEY',
  insecure: false // Default is false.
})
// Presigned get object URL for object name my-bucketname, it expires in 7 days by default.
var presignedUrl = s3Client.presignedGetObject('my-bucketname', 'my-objectname', 1000, function(e, presignedUrl) {
  if (e) return console.log(e)
  console.log(presignedUrl)
})
