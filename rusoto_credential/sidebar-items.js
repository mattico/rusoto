initSidebarItems({"struct":[["AwsCredentials","AWS API access credentials, including access key, secret key, token (for IAM profiles), and expiration timestamp."],["BaseAutoRefreshingProvider","Wrapper for `ProvideAwsCredentials` that caches the credentials returned by the wrapped provider.  Each time the credentials are accessed, they are checked to see if they have expired, in which case they are retrieved from the wrapped provider again."],["ChainProvider","Provides AWS credentials from multiple possible sources using a priority order."],["ContainerProvider","Provides AWS credentials from a task's IAM role."],["CredentialsError",""],["EnvironmentProvider","Provides AWS credentials from environment variables."],["InstanceMetadataProvider","Provides AWS credentials from a resource's IAM role."],["ProfileProvider","Provides AWS credentials from a profile in a credentials file."]],"trait":[["ProvideAwsCredentials","A trait for types that produce `AwsCredentials`."]],"type":[["AutoRefreshingProvider","`!Sync` `AutoRefreshingProvider` that caches credentials in a `RefCell`"],["AutoRefreshingProviderSync","Threadsafe `AutoRefreshingProvider` that locks cached credentials with a `Mutex`"],["DefaultCredentialsProvider","The credentials provider you probably want to use if you don't require Sync for your AWS services. Wraps a `ChainProvider` in an `AutoRefreshingProvider` that uses a `RefCell` to cache credentials"],["DefaultCredentialsProviderSync","The credentials provider you probably want to use if you do require Sync for your AWS services. Wraps a `ChainProvider` in an `AutoRefreshingProvider` that uses a `Mutex` to lock credentials in a threadsafe manner."]]});