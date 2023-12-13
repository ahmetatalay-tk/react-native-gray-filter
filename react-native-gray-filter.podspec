require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name             = package['name']
  s.version          = package['version']
  s.summary          = package['description']
  s.homepage         = package['homepage']
  s.license          = package['license']
  s.author           = package['author']
  s.platform         = :ios, '9.0'
  s.source           = { :git => 'https://github.com/ahmetatalay-tk/react-native-gray-filter', :tag => 'v#{s.version}' }
  s.source_files     = 'ios/**/*.{h,m}'
  s.resource_bundles = { 'bundle' => ['ios/Resources/*.cikernel'] }
  s.requires_arc     = true

  s.dependency 'React'
  s.dependency 'Bolts/Tasks', '1.9.0'
end