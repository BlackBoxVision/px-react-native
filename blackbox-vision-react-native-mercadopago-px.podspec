require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "blackbox-vision-react-native-mercadopago-px"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/BlackBoxVision/react-native-mercadopago-px.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift}"

  s.swift_version = "4.2"

  s.static_framework = true

  s.dependency "React"
  s.dependency "MercadoPagoSDK", "4.32.4" 
end
